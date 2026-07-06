import { chipClasses } from '@mui/material/Chip'
import { dividerClasses } from '@mui/material/Divider'
import { iconButtonClasses } from '@mui/material/IconButton'
import { menuItemClasses } from '@mui/material/MenuItem'
import { outlinedInputClasses } from '@mui/material/OutlinedInput'
import { selectClasses } from '@mui/material/Select'
import { svgIconClasses } from '@mui/material/SvgIcon'
import { tabClasses } from '@mui/material/Tab'
import { toggleButtonClasses } from '@mui/material/ToggleButton'
import { toggleButtonGroupClasses } from '@mui/material/ToggleButtonGroup'
import { Components, Theme, alpha } from '@mui/material/styles'

import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded'

import { hexToRgba } from '@/utils'

import AppIcon from '@/components/Core/AppIcon'

import { brand, colors, gray, red } from '../themePrimitives'
import { BorderColor } from '@mui/icons-material'

export const customizations: Components<Theme> = {
  MuiContainer: {
    styleOverrides: {
      root: {
        '&.MuiContainer-maxWidthLg': {
          maxWidth: '1040px'
        }
      }
    }
  },
  MuiButtonBase: {
    styleOverrides: {
      root: {
        boxSizing: 'border-box',
        transition: 'all 100ms ease-in'
      }
    }
  },
  MuiButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        boxShadow: 'none',
        borderRadius: theme.shape.borderRadius,
        textTransform: 'none',
        width: 'fit-content',
        variants: [
          {
            props: {
              fullWidth: true
            },
            style: {
              width: '100%'
            }
          },
          {
            props: {
              color: 'inherit'
            },
            style: {
              backgroundColor: '#ECECEC'
            }
          }
        ]
      })
    }
  },
  MuiIconButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        boxShadow: 'none',
        borderRadius: theme.shape.borderRadius,
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightMedium,
        letterSpacing: 0,
        border: '1px solid ',
        borderColor: gray[200],
        backgroundColor: alpha(gray[50], 0.3),
        '&:hover': {
          backgroundColor: gray[100],
          borderColor: gray[300]
        },
        '&:active': {
          backgroundColor: gray[200]
        },
        ...theme.applyStyles('dark', {
          borderColor: gray[700],
          '&:hover': {
            backgroundColor: gray[900],
            borderColor: gray[600]
          },
          '&:active': {
            backgroundColor: gray[900]
          }
        }),
        variants: [
          {
            props: {
              color: 'inherit'
            },
            style: {
              backgroundColor: 'transparent !important',
              border: 'none',
              borderRadius: '50%'
            }
          },
          {
            props: {
              size: 'small'
            },
            style: {
              width: '2.25rem',
              height: '2.25rem',
              padding: '0.25rem',
              [`& .${svgIconClasses.root}`]: { fontSize: '1rem' }
            }
          },
          {
            props: {
              size: 'medium'
            },
            style: {
              width: '2.5rem',
              height: '2.5rem'
            }
          },
          {
            props: {
              color: 'primary'
            },
            style: {
              borderColor: `${colors.prime} !important`,
              backgroundColor: `${alpha(colors.prime, 0.16)} !important`
            }
          },
          {
            props: {
              color: 'error'
            },
            style: {
              borderColor: `${colors.red} !important`,
              backgroundColor: `${alpha(colors.white, 0.16)} !important`
            }
          }
        ]
      })
    }
  },
  MuiToggleButtonGroup: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: '10px',
        boxShadow: `0 4px 16px ${alpha(gray[400], 0.2)}`,
        [`& .${toggleButtonGroupClasses.selected}`]: {
          color: brand[500]
        },
        ...theme.applyStyles('dark', {
          [`& .${toggleButtonGroupClasses.selected}`]: {
            color: colors.white
          },
          boxShadow: `0 4px 16px ${alpha(brand[700], 0.5)}`
        })
      })
    }
  },
  MuiToggleButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: '12px 16px',
        textTransform: 'none',
        borderRadius: '10px',
        fontWeight: 500,
        ...theme.applyStyles('dark', {
          color: gray[400],
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.5)',
          [`&.${toggleButtonClasses.selected}`]: {
            color: brand[300]
          }
        })
      })
    }
  },
  MuiTypography: {
    styleOverrides: {
      root: ({ theme }) => ({
        variants: [
          {
            props: { color: 'grey' },
            style: {
              color: `${colors.greyDark} !important`,
              ...theme.applyStyles('dark', {
                color: `${colors.greyLight} !important`
              })
            }
          },
          {
            props: { color: 'grey-dark' },
            style: {
              color: `${colors.greyDark} !important`
            }
          },
          {
            props: { color: 'red' },
            style: {
              color: `${colors.red} !important`
            }
          },
          {
            props: { color: 'default' },
            style: {
              color: `${colors.dark} !important`,
              ...theme.applyStyles('dark', {
                color: `${colors.white} !important`
              })
            }
          },
          {
            props: { color: 'prime' },
            style: {
              color: `${colors.prime} !important`
            }
          }
        ]
      })
    }
  },
  MuiCheckbox: {
    defaultProps: {
      disableRipple: true,
      icon: <CheckBoxOutlineBlankRoundedIcon sx={{ color: 'transparent' }} />,
      checkedIcon: <CheckRoundedIcon sx={{ height: 12, width: 12, color: 'white' }} />,
      indeterminateIcon: <RemoveRoundedIcon sx={{ height: 12, width: 12 }} />
    },
    styleOverrides: {
      root: ({ theme }) => ({
        height: '14px !important',
        width: '14px !important',
        border: '1px solid ',
        borderColor: theme.palette.divider,
        padding: '4px',
        backgroundColor: '#fff',
        borderRadius: '4px',
        transition: '120ms ease-in',
        '&:hover': {
          borderColor: theme.palette.secondary.main
        },
        '&.Mui-focusVisible': {
          outline: `3px solid ${alpha(theme.palette.secondary.main, 0.5)}`,
          outlineOffset: '2px'
        },
        '&.Mui-checked': {
          color: 'white',
          backgroundColor: theme.palette.secondary.main,
          borderColor: theme.palette.secondary.main,
          boxShadow: `none`,
          '&:hover': {
            backgroundColor: theme.palette.secondary.main
          }
        }
      })
    }
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        border: 'none'
      },
      input: {
        '&::placeholder': {
          opacity: 0.7,
          color: gray[500]
        }
      }
    }
  },

  // MuiOutlinedInput: {
  //   styleOverrides: {
  //     input: ({ theme }) => ({
  //       padding: 0
  //     }),
  //     root: ({ theme }) => ({
  //       padding: '8px 12px',
  //       color: theme.palette.text.primary,
  //       borderRadius: theme.shape.borderRadius,
  //       border: `1px solid ${theme.palette.divider}`,
  //       backgroundColor: colors.white,
  //       transition: 'border 120ms ease-in',
  //       '&:hover': {
  //         borderColor: gray[400]
  //       },
  //       [`&.${outlinedInputClasses.focused}`]: {
  //         borderColor: brand[400]
  //       },
  //       variants: [
  //         {
  //           props: {
  //             size: 'small'
  //           },
  //           style: {
  //             height: '2.25rem'
  //           }
  //         },
  //         {
  //           props: {
  //             size: 'medium'
  //           },
  //           style: {
  //             height: '2.5rem'
  //           }
  //         }
  //       ]
  //     }),
  //     notchedOutline: {
  //       border: 'none'
  //     }
  //   }
  // },
  MuiInputAdornment: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.grey[500],
        ...theme.applyStyles('dark', {
          color: theme.palette.grey[400]
        })
      })
    }
  },
  MuiFormLabel: {
    styleOverrides: {
      root: ({ theme }) => ({
        typography: theme.typography.caption,
        marginBottom: 8
      })
    }
  },
  MuiList: {
    styleOverrides: {
      root: {
        padding: '8px',
        display: 'flex',
        flexDirection: 'column',
        gap: 0
      }
    }
  },
  MuiListItemText: {
    styleOverrides: {
      primary: ({ theme }) => ({
        fontSize: theme.typography.body2.fontSize,
        fontWeight: 500,
        lineHeight: theme.typography.body2.lineHeight
      }),
      secondary: ({ theme }) => ({
        fontSize: theme.typography.caption.fontSize,
        lineHeight: theme.typography.caption.lineHeight
      })
    }
  },
  // MuiListSubheader: {
  //   styleOverrides: {
  //     root: ({ theme }) => ({
  //       backgroundColor: 'transparent',
  //       padding: '4px 8px',
  //       fontSize: theme.typography.caption.fontSize,
  //       fontWeight: 500,
  //       lineHeight: theme.typography.caption.lineHeight
  //     })
  //   }
  // },
  MuiListItemIcon: {
    styleOverrides: {
      root: {
        minWidth: 0
      }
    }
  },
  MuiChip: {
    defaultProps: {
      size: 'small'
    },
    styleOverrides: {
      root: ({ theme }) => ({
        border: '1px solid',
        borderRadius: '999px',
        [`& .${chipClasses.label}`]: {
          fontWeight: 600
        },
        variants: [
          {
            props: {
              color: 'default'
            },
            style: {
              borderColor: gray[200],
              backgroundColor: gray[100],
              [`& .${chipClasses.label}`]: {
                color: gray[500]
              },
              [`& .${chipClasses.icon}`]: {
                color: gray[500]
              },
              ...theme.applyStyles('dark', {
                borderColor: gray[700],
                backgroundColor: gray[800],
                [`& .${chipClasses.label}`]: {
                  color: gray[300]
                },
                [`& .${chipClasses.icon}`]: {
                  color: gray[300]
                }
              })
            }
          },
          {
            props: {
              color: 'success'
            },
            style: {
              borderColor: colors.prime,
              backgroundColor: hexToRgba(colors.prime, 8),
              [`& .${chipClasses.label}`]: {
                color: colors.prime
              },
              [`& .${chipClasses.icon}`]: {
                color: colors.prime
              }
            }
          },
          {
            props: {
              color: 'warning'
            },
            style: {
              borderColor: colors.orange,
              backgroundColor: hexToRgba(colors.orange, 8),
              [`& .${chipClasses.label}`]: {
                color: colors.orange
              },
              [`& .${chipClasses.icon}`]: {
                color: colors.orange
              }
            }
          },
          {
            props: {
              color: 'error'
            },
            style: {
              borderColor: red[100],
              backgroundColor: red[50],
              [`& .${chipClasses.label}`]: {
                color: red[500]
              },
              [`& .${chipClasses.icon}`]: {
                color: red[500]
              },
              ...theme.applyStyles('dark', {
                borderColor: red[800],
                backgroundColor: red[900],
                [`& .${chipClasses.label}`]: {
                  color: red[200]
                },
                [`& .${chipClasses.icon}`]: {
                  color: red[300]
                }
              })
            }
          },
          {
            props: { size: 'small' },
            style: {
              maxHeight: 20,
              [`& .${chipClasses.label}`]: {
                fontSize: theme.typography.caption.fontSize
              },
              [`& .${svgIconClasses.root}`]: {
                fontSize: theme.typography.caption.fontSize
              }
            }
          },
          {
            props: { size: 'medium' },
            style: {
              [`& .${chipClasses.label}`]: {
                fontSize: theme.typography.caption.fontSize
              }
            }
          }
        ]
      })
    }
  },
  MuiTablePagination: {
    styleOverrides: {
      actions: {
        display: 'flex',
        gap: 8,
        marginRight: 6,
        [`& .${iconButtonClasses.root}`]: {
          minWidth: 0,
          width: 36,
          height: 36
        }
      }
    }
  },
  MuiTableCell: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderColor: theme.palette.divider
      })
    }
  },
  MuiTableBody: {
    styleOverrides: {
      root: ({ theme }) => ({
        '& .MuiTableRow-root': {
          '&:last-child td, &:last-child th': { border: 0 },
          '&:nth-of-type(odd)': {
            backgroundColor: colors.greyLight,
            ...theme.applyStyles('dark', {
              backgroundColor: colors.layer2Dark
            })
          }
        }
      })
    }
  },
  MuiStepConnector: {
    styleOverrides: {
      root: ({ theme }) => ({
        margin: 8
      })
    }
  },
  MuiStepButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderColor: `${colors.red} !important`,
        '&.Mui-disabled': {
          borderColor: `${colors.borderLight} !important`
        }
      })
    }
  },
  MuiStepLabel: {
    styleOverrides: {
      label: {
        color: '#797979',
        '&.Mui-active': {
          color: '#1D1D1F'
        },
        '&.Mui-completed': {
          color: '#E24744'
        }
      }
    }
  },
  MuiTable: {
    styleOverrides: {
      root: ({ theme }) => ({
        minWidth: 650,
        borderColor: colors.borderDark,
        backgroundColor: colors.white,
        boxShadow: '0px 1px 4px rgba(12, 12, 13, 0.05)',
        ...theme.applyStyles('dark', {
          backgroundColor: colors.layer1Dark
        })
      })
    }
  },
  MuiIcon: {
    defaultProps: {
      fontSize: 'small'
    },
    styleOverrides: {
      root: {
        variants: [
          {
            props: {
              fontSize: 'small'
            },
            style: {
              fontSize: '1rem'
            }
          }
        ]
      }
    }
  },
  MuiMenuItem: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: theme.shape.borderRadius,
        padding: '6px 8px',
        [`&.${menuItemClasses.focusVisible}`]: {
          backgroundColor: 'transparent'
        },
        [`&.${menuItemClasses.selected}`]: {
          [`&.${menuItemClasses.focusVisible}`]: {
            backgroundColor: alpha(theme.palette.action.selected, 0.3)
          }
        }
      })
    }
  },
  MuiMenu: {
    styleOverrides: {
      list: {
        gap: '0px',
        [`&.${dividerClasses.root}`]: {
          margin: '0 -8px'
        }
      },
      paper: ({ theme }) => ({
        marginTop: '4px',
        borderRadius: theme.shape.borderRadius,
        border: `1px solid ${theme.palette.divider}`,
        backgroundImage: 'none',
        background: colors.white,
        boxShadow: 'hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px'
      })
    }
  },
  MuiSelect: {
    defaultProps: {
      IconComponent: () => <AppIcon name='down' />
    },
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: theme.shape.borderRadius,
        border: '1px solid',
        borderColor: gray[200],
        backgroundColor: theme.palette.background.paper,
        boxShadow: `inset 0 1px 0 1px hsla(220, 0%, 100%, 0.6), inset 0 -1px 0 1px hsla(220, 35%, 90%, 0.5)`,
        '&:hover': {
          borderColor: gray[300],
          backgroundColor: theme.palette.background.paper,
          boxShadow: 'none'
        },
        [`&.${selectClasses.focused}`]: {
          outlineOffset: 0,
          borderColor: gray[400]
        },
        '&:before, &:after': {
          display: 'none'
        },

        ...theme.applyStyles('dark', {
          borderRadius: theme.shape.borderRadius,
          borderColor: gray[700],
          backgroundColor: theme.palette.background.paper,
          boxShadow: `inset 0 1px 0 1px ${alpha(gray[700], 0.15)}, inset 0 -1px 0 1px hsla(220, 0%, 0%, 0.7)`,
          '&:hover': {
            borderColor: alpha(gray[700], 0.7),
            backgroundColor: theme.palette.background.paper,
            boxShadow: 'none'
          },
          [`&.${selectClasses.focused}`]: {
            outlineOffset: 0
          },
          '&:before, &:after': {
            display: 'none'
          }
        })
      }),
      select: ({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        ...theme.applyStyles('dark', {
          display: 'flex',
          alignItems: 'center'
        })
      })
    }
  },
  MuiDrawer: {
    styleOverrides: {
      paper: ({ theme }) => ({
        backgroundColor: theme.palette.background.default
      })
    }
  },
  MuiTabs: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: '10px',
        minHeight: 'fit-content',
        backgroundColor: colors.border,
        ...theme.applyStyles('dark', {
          backgroundColor: colors.bgDark
        })
      }),
      indicator: {
        height: '100%',
        borderRadius: '10px',
        background: 'transparent',
        border: `1px solid ${colors.prime}`
      },
      scroller: {
        width: 'auto'
      },
      vertical: ({ theme }) => ({
        backgroundColor: 'transparent !important',
        '& .MuiTabs-indicator': {
          display: 'none !important'
        },
        '& .MuiTab-root:hover': {
          color: colors.dark,
          ...theme.applyStyles('dark', {
            color: colors.white
          })
        }
      })
    }
  },
  MuiTab: {
    styleOverrides: {
      root: ({ theme }) => ({
        margin: 0,
        fontSize: '16px',
        padding: '10px 20px',
        borderRadius: '10px',
        textTransform: 'none',
        minWidth: 'fit-content',
        minHeight: 'fit-content',
        color: theme.palette.text.secondary,
        border: '1px solid',
        borderColor: 'transparent',
        ':hover': {
          color: colors.prime
        },
        [`&.${tabClasses.selected}`]: {
          color: colors.prime,
          backgroundColor: hexToRgba(colors.prime, 8),
          borderColor: colors.prime
        },
        ...theme.applyStyles('dark', {
          [`&.${tabClasses.selected}`]: {
            color: colors.prime,
            backgroundColor: hexToRgba(colors.prime, 8),
            borderColor: colors.prime
          }
        })
      })
    }
  },
  MuiAlert: {
    styleOverrides: {
      root: {
        borderRadius: 10,
        variants: [
          {
            props: {
              severity: 'success'
            },
            style: {
              backgroundColor: hexToRgba(colors.prime, 8),
              color: colors.prime,
              border: `1px solid ${colors.prime}`,
              '& .MuiAlert-icon': {
                color: colors.prime
              }
            }
          },
          {
            props: {
              severity: 'warning'
            },
            style: {
              backgroundColor: hexToRgba(colors.orange, 8),
              color: colors.orange,
              border: `1px solid ${colors.orange}`,
              '& .MuiAlert-icon': {
                color: colors.orange
              }
            }
          }
        ]
      }
    }
  },
  MuiDialog: {
    styleOverrides: {
      root: ({ theme }) => ({
        '& .MuiDialog-paper': {
          borderRadius: '10px',
          border: '1px solid',
          borderColor: colors.border,
          ...theme.applyStyles('dark', {
            borderColor: colors.borderDark,
            backgroundColor: colors.layer1Dark
          }),
          [theme.breakpoints.down(426)]: {
            maxHeight: '100vh',
            maxWidth: '100vw',
            height: '100vh',
            width: '100vw',
            margin: 0,
            borderRadius: 0
          }
        }
      })
    }
  },
  MuiLinearProgress: {
    styleOverrides: {
      root: ({ theme }) => ({
        height: 8,
        borderRadius: 8,
        backgroundColor: gray[200],
        ...theme.applyStyles('dark', {
          backgroundColor: gray[800]
        })
      })
    }
  },
  MuiAccordion: {
    defaultProps: {
      elevation: 0,
      disableGutters: true
    },
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 16,
        padding: 4,
        marginTop: 8,
        marginBottom: 8,
        overflow: 'clip',
        backgroundColor: theme.palette.background.default,
        border: '1px solid',
        borderColor: theme.palette.divider,
        ':before': {
          backgroundColor: 'transparent'
        },
        '&:first-of-type': {
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16
        },
        '&:last-of-type': {
          borderBottomLeftRadius: 16,
          borderBottomRightRadius: 16
        }
      })
    }
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        border: 'none'
      }
    }
  },
  MuiAccordionDetails: {
    styleOverrides: {
      root: { border: 'none' }
    }
  },
  MuiPaper: {
    defaultProps: {
      elevation: 0
    },
    styleOverrides: {
      root: {
        backgroundImage: 'none'
      }
    }
  },
  MuiCard: {
    styleOverrides: {
      root: ({ theme }) => {
        return {
          padding: 16,
          gap: 16,
          transition: 'all 100ms ease',
          backgroundColor: gray[50],
          borderRadius: theme.shape.borderRadius,
          border: `1px solid ${theme.palette.divider}`,
          boxShadow: 'none',
          ...theme.applyStyles('dark', {
            backgroundColor: colors.layer1Dark
          }),
          variants: [
            {
              props: {
                variant: 'outlined'
              },
              style: {
                border: `1px solid ${theme.palette.divider}`,
                boxShadow: 'none',
                background: colors.white,
                ...theme.applyStyles('dark', {
                  background: alpha(gray[900], 0.4)
                })
              }
            }
          ]
        }
      }
    }
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: 0,
        '&:last-child': { paddingBottom: 0 }
      }
    }
  },
  MuiCardHeader: {
    styleOverrides: {
      root: {
        padding: 0
      }
    }
  },
  MuiCardActions: {
    styleOverrides: {
      root: {
        padding: 0
      }
    }
  },
  MuiFormControlLabel: {
    styleOverrides: {
      root: {
        fontSize: '10px',
        marginLeft: '4px',
        gap: '8px'
      },
      label: {
        width: '100%'
      }
    }
  },
  MuiRadio: {
    styleOverrides: {
      root: {
        '&.Mui-checked': {
          color: '#E24744',
          Border: '1px solid #E24744'
        }
      }
    }
  }
}
