<script>
    import { redirect } from '@sveltejs/kit'
</script>


<div class="flex flex-col items-center h-full w-full text-gray-200  bg-slate-950" >
    <h2 class="mt-2 text-center text-6xl text-gray-200 font-bold tracking-tight text-base-content m-10 p-5">
        KAFKOMETRY - Powered By Svelte
    </h2>
    
    <div class="grid grid-cols-2 grid-template-columns:auto auto  bg-slate-500">
        <label for="app description">
            Kafkometry is an app powered by Svelte that aims to visualize data from 
            targeted clusters using Prometheus and Grafana. By using Svelte's in built features, data illustrations
            will be rendered for users at unbelieveable speeds! Your dashboards will only have the diagrams you want,
            clearing out all the distracting clutter!
        </label>
        <figure>
            <img src="Example Dashboard.png" alt="Example screenshot of a dashboard we aim to make." >       
            <figcaption class="text-center p-5">An example Dashboard</figcaption>
        </figure>
    </div>
    <button type="button" class="text-center text-6xl font-bold m-5 p-5 underline text-blue-600 hover:text-blue-800 border-style:solid border-color:rgb(255 255 255)" on:click={()=>window.location.href = 'https://github.com/oslabs-beta/Kafkometry/'} >
        Check Out Our Github Repository!</button>
    <h2 class="text-center text-6xl font-bold m-10 p-5 underline " >
        Meet the Developers!
    </h2>
    <div class="grid grid-cols-2 auto-cols-auto bg-slate-500">
        <img alt="Picture of dev" src='Dev stock photo.jpeg' class="m-5 p-5">
        <ul>
            <li class="m-5 p-5 text-5xl">Mitch Gruen</li>
            <li class="m-5 p-5 text-2xl">
                <a href='https://www.linkedin.com/in/mitch-gruen/' target="_blank" class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">Linkedin</a>
            </li>
            <li class="m-5 p-5 text-2xl">
                <a href='https://github.com/mitchgruen' target="_blank" class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">Github</a>
            </li>
            <li class="m-5 p-5 text-2xl">
                <a href="mailto:mitchgruen@gmail.com" class="underline text-blue-600 hover:text-blue-800">Email Mitch!</a>
            </li>
        </ul>
    </div>
    
    <div class="grid grid-cols-2 auto-cols-auto">
        <ul>
            <li class="m-5 p-5 text-5xl">Benjamin Dunn</li>
            <li class="m-5 p-5 text-2xl">
                <a href="http://linkedin.com/in/benjamin-dunn-4803aa284/" target = "_blank" class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">Linkedin</a>
            </li>
            <li class="m-5 p-5 text-2xl">
                <a href="https://github.com/benjam-26" target="_blank" class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">Github</a>
            </li>
            <li class="m-5 p-5 text-2xl">
                <a href="mailto:benjam26@gmail.com" class="underline text-blue-600 hover:text-blue-800">Email Benjamin!</a>
            </li>
        </ul>
        <img alt="Picture of dev" src='Dev stock photo.jpeg' class="m-5 p-5">
    </div>
    <div class="grid grid-cols-2 auto-cols-auto bg-slate-500">
        <img alt="Picture of dev" src='Dev stock photo.jpeg' class="m-5 p-5">
        <ul >
            <li class="m-5 p-5 text-5xl">Vincent Do</li>
            <li class="m-5 p-5 text-2xl">
                <a href="https://www.linkedin.com/in/vincentydo/" target="_blank" class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">Linkedin</a>
            </li>
            <li class="m-5 p-5 text-2xl">
                <a href="https://github.com/VDoCodes" target="_blank" class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">Github</a>
            </li>
            <li class="m-5 p-5 text-2xl">
                <a href="mailto:vincentd4992@gmail.com" class="underline text-blue-600 hover:text-blue-800">Email Vincent!</a>
            </li>
        </ul>
    </div>
    <div class="grid grid-cols-2 auto-cols-auto">
        <ul>
            <li class="m-5 p-5 text-5xl">Alwin Zhao</li>
            <li class="m-5 p-5 text-2xl">
                <a href="https://www.linkedin.com/in/alwin-zhao" target="_blank" class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">Linkedin</a>
            </li>
            <li class="m-5 p-5 text-2xl">
                <a href="https://github.com/pijjon" target="_blank" class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">Github</a>
            </li>
            <li class="m-5 p-5 text-2xl">
                <a href="mailto:alwinzhao12@gmail.com" class="underline text-blue-600 hover:text-blue-800">Email Alwin!</a>
            </li>
        </ul>
        <img alt="Picture of dev" src='Dev stock photo.jpeg' class="m-5 p-5">
    </div>
</div>

