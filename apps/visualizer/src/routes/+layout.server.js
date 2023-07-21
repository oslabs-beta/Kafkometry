// nav bar
// buttons that take you to different pages of the application
    // these buttons will change based on user actions (login, register, GUI, profile, cluster profile)
// theme (styling)
export const load = ({ locals }) => {
    if (locals.user) {
        return {
            user: locals.user
        };
    };

    return {
        user: undefined
    };
};
