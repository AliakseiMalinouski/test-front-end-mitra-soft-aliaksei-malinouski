export const applicationAnimationConfig = {
    drawer: {
        hidden: {
            right: -300,
            opacity: 0
        },
        visible: {
            right: 0,
            opacity: 1,
            transition: {
                delay: 0.2,
                duration: 0.5
            }
        },
        exit: {
            right: -300,
            opacity: 0
        }
    },
    post: {
        hidden: {
            x: -300,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.2,
                duration: 0.5
            }
        },
    },
    comments: {
        hidden: {
            opacity: 0
        },
        visible: custom => ({
            opacity: 1,
            transition: {
                delay: 0.2 * custom,
                duration: 0.5
            }
        }),
        exit: {
            opacity: 0
        }
    },
}