export default {
  Menu: {
    common: {
      width: {
        full: '241px',
        fold: '78px',
      },
      backgroundColor: '#FFFFFF',
      borderColor: 'rgba(0, 0, 0, 0.25)',
      borderWidth: '1px',
      shadowX: '0px',
      shadowY: '2px',
      shadowColor: 'rgba(0, 0, 0, 0.25)',
    },
    header: {
      height: '200px',
      alignItems: 'center',
      marginTop: '10px',
      marginBottom: '10px',
    },
    item: {
      width: '80%',
      height: '52px',
      borderRadius: '4px',
      marginTop: '10px',
      marginBottom: '10px',
      hoverBorderWidth: '1px',
      hoverBorderColor: '#F8EC31',
      shadowX: '0px',
      shadowY: '2px',
      shadowColor: 'rgba(0, 0, 0, 0.25)',
      justifyContentOnFull: 'flex-start',
      justifyContentOnFold: 'center',
      isSelectedColor: '#F8EC31',
      activeStyle: {
        isSelectedColor: '#F8EC31',
      },
      textColor: 'black',
    },
    fullModeButton: {
      height: '80px',
    },
    separator: {
      width: '80%',
      height: '1px',
      color: 'rgba(0, 0, 0, 0.25)',
    },
    footer: {
      height: '240px',
      alignItems: 'center',
      marginTop: '10px',
      marginBottom: '10px',
    },
  },
};
