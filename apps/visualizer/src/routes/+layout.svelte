<script>
    import "../app.postcss";
    export let data
  </script>
  
  <div class="min-h-full">
    <nav class="navbar bg-base-100 border-b">
      <div class="flex-1">
        <a href="/" class="btn btn-ghost normal-case text-xl">Kafkometry</a>
        <p>a lightweight Kafka metric visualizer for Svelte</p>
      </div>
      <div class="flex-none">
        {#if !data.user}
        <div class="dropdown dropdown-end">
          <a href="/gui" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 border border-blue-700 rounded">Kafka Visualizer</a>
          <a href="/cluster_profile" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 border border-blue-700 rounded">Cluster Profile</a>
          <a href="/user_profile" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 border border-blue-700 rounded">User Profile</a>
          <!-- <a href="/login" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 border border-blue-700 rounded">Login</a> -->
          <!-- <a href="/register" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 border border-blue-700 rounded">Register</a> -->
        </div>
        {:else}
        <!-- This has to be refactored once we have login/signup logic built -->
        <div class="dropdown dropdown-end mr-4">
          <a href="/projects/new" class="btn btn-primary btn-outline">Add Project</a>
        </div>
        <div class="dropdown dropdown-end">
          <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" alt="User avatar">
            </div>
          </label>
          <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
          <li>
            <a href="/my/projects" class="justify-between">My Projects</a>
          </li>
          <li><a href="/my/settings">Settings</a></li>
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
    <div class="py-10">
      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <slot />
      </div>
    </div>
  </div>