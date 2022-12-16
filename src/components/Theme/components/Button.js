const Button = {
    baseStyle: {
        textTransform: 'none',
        fontWeight: '700',
        fontFamily: 'body',
        fontSize: '14px',
        hover: {
            bgColor: 'transparent',
        },
    },
    variants: {
        primary: () => ({
            pos: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            bgColor: 'inherit',
            borderRadius: '50%',
            w: ['80px', '100px'],
            h: ['80px', '100px'],
            border: '1px solid #fff',
            outline: 'none',
            mb: '8',
            p: '0',
        }),
        secondary: {
            FontSize: '16px',
        },
    },
    defaultProps: {
        variant: 'secondary',
    },
};

export default Button;
