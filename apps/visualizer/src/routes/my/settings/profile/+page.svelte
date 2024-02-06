<script>
    import { Icon, Pencil } from 'svelte-hero-icons';
    import { Input } from '$lib/components'
    import { getImageURL } from '$lib/utils'

    export let data

    const showPreview = (event) => {
        const target = event.target;
        const files = target.files;

        if (files.length > 0) {
            const src = URL.createObjectURL(files[0]);
            const preview = document.getElementById('avatar-preview');
            preview.src = src;
        }
    };


</script>

<div class="flex flex-col w-full h-full">
    <form action="?/updateProfile" method="POST" class="flex flex-col space-y-2 w-full" enctype="multipart/form-data">
        <h3 class="text-2xl font-medium">
            Update Profile
        </h3>
        <div class="form-control w-full max-w-lg">
            <label for="avatar" class="label font-medium pb-1">
                <span class=label-text>Profile Picture</span>
            </label>
            <label for="avatar" class="avatar w-32 rounded-full hover:cursor-pointer">
                <label for="avatar"class="absolute -bottom-0.5 -right-0.5 hover:cursor-pointer">
                    <span class="btn btn-circle btn-sm btn-secondary">
                        <Icon src={Pencil} class="w-4 h-4" />
                    </span>
                </label>
                <div class="w-32 rounded-full">
                    <img src={data.user?.avatar ? getImageURL(data.user?.collectionId, data?.user?.id, data.user?.avatar) : `https://ui-avatars.com/api/?name=${data.user?.name}`} alt="user avatar" id="avatar-preview"/>
                </div>
            </label>
            <input type="file" name="avatar" id="avatar" value="" accept="image/*" hidden on:change={showPreview}/>
        </div>
        <Input id="name" label="Name" value={data?.user?.name} />
        <div class="w-full max-w-lg pt-3">
            <!-- <button class="btn btn-primary w-full max-w-lg" type="submit"> -->
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-7 w-full max-w-lg border border-blue-700 rounded" type="submit">
                Update Profile
            </button>
        </div>
    </form>

</div>