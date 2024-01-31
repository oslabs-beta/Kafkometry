import { error } from '@sveltejs/kit';

// For updating username and avatar - stored in pocketbase database
export const actions = {
    updateProfile: async ({ request, locals }) => {
        let data = await request.formData();
        const userAvatar = data.get('avatar');

        if (userAvatar.size === 0) {
            data.delete('avatar')
        }

        try {
          //const { name, avatar }  = await locals.pb.collection('users').update(locals?.user?.id, data);
          const updatedUser = await locals.pb.collection('users').update(locals?.user?.id, data);
        //   locals.user.name = name;
        //   locals.user.avatar = avatar;
          locals.user.name = updatedUser.name;
          locals.user.avatar = updatedUser.avatar;
        } catch (err) {
            console.log('Error: ', err);

            throw error(400, 'Something went wrong updating your profile');
        }

        return {
            success: true
        };

    }
};