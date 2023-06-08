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
    }
}