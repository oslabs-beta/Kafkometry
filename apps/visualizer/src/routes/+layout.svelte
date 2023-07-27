<script>
    import "../app.postcss";
    import { getImageURL } from '$lib/utils'
    export let data
  </script>
  
  <div class="min-h-full">
    <nav class="navbar bg-base-100 border-b">
      <div class="flex-1">
        <a href="/" class="btn btn-ghost normal-case text-xl">Kafkometry</a>
        <p>a lightweight Kafka metric visualizer made with SvelteKit</p>
      </div>
      <div class="flex-none">
          <!-- only for logging in with email -->
        {#if !data.user}
        <!-- <div class="dropdown dropdown-end"> -->
          <!-- <a href="/gui" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 border border-blue-700 rounded">Kafka Visualizer</a> -->
          <!-- <a href="/cluster_profile" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 border border-blue-700 rounded">Cluster Profile</a> -->
          <!-- <a href="/user_profile" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 border border-blue-700 rounded">User Profile</a> -->
        
        {:else}
        <!-- <form method="POST">
          <li>
            <button formaction="/?/setTheme&theme=dark">
              Dark
            </button>
          </li>
          <li>
            <button formaction="/?/setTheme&theme=light">
              Light
            </button>
          </li>
        </form> -->

        <div class="dropdown dropdown-end mr-4">
          <a href="/gui" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 border border-blue-700 rounded">Kafka Visualizer</a>
          <a href="/cluster_profile" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 border border-blue-700 rounded">Cluster Profile</a>
          
        </div>
        <div class="dropdown dropdown-end">
          <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img src={data.user?.avatar ? getImageURL(data.user?.collectionId, data?.user?.id, data.user?.avatar) : `https://ui-avatars.com/api/?name=${data.user?.name}`} alt="User">
            </div>
          </label>
          <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/my/settings">Settings</a>
            </li>
            <li>
              <form action="/logout" method="POST">
                <button type="submit" class="w-full text-start">Logout</button>
              </form>
            </li>
          </ul>
        </div>
        {/if}
      </div>
    </nav>
    <div class="py-4">
      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <slot />
      </div>
    </div>
  </div>