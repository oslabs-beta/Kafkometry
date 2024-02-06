<script>
    export let form
</script>

<div class="flex flex-col items-center h-full w-full">
    <h2 class="mt-2 text-center text-3xl font-bold tracking-tight text-base-content">
        Please login to your account
    </h2>
    <p class="text-center mt-1">
        Or <a href="/register" class="text-secondary font-medium hover:cursor-pointer hover:underline">register</a> if you 
        do not have an account.
    </p>
    <form action="?/login" method="POST" class="flex flex-col items-center space-y-2 w-full pt-4 pb-8">
   
        <div class="form-control w-full max-w-md">
            <label for="email" class="label font-medium pb-1">
                <span class="label-text">Email</span>
            </label>
            <input type="email" name="email" class="input input-bordered w-full max-w-md">
        </div>
        <div class="form-control w-full max-w-md">
            <label for="password" class="label font-medium pb-1">
                <span class="label-text">Password</span>
            </label>
            <input type="password" name="password" class="input input-bordered w-full max-w-md">
        </div>

        <div class="w-full max-w-md pt-2">
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 w-full max-w-md border border-blue-700 rounded">Login</button>
        </div>
        {#if form?.notVerified}
            <div class="alert alert-error shadow-lg w-full max-w-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>You must verify your email before logging in.</span>
            </div>
        {/if}
    </form>

    <form class="flex flex-col items-center space-y-2 w-full pt-4" method="post" action="?/OAuth2">
        <div class="w-full max-w-md pt-2">
            <!-- <p>Or</p> -->
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 w-full max-w-md border border-blue-700 rounded">
                Sign in with Google
            </button>
        </div>
    </form>

    <!-- <form class="github" method="post" action="?/GithubLogin">
        <div >
            <p>Or</p>
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 w-full max-w-md border border-blue-700 rounded">
                Sign in with Github
            </button>
        </div>
        {#if form?.notVerified}
            <div class="alert alert-error shadow-lg w-full ma-w-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>You must verify your email before logging in.</span>
            </div>
        {/if}
    </form> -->
</div>