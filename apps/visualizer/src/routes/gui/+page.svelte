<!-- <div class="flex flex-col items-center h-full w-full">
    <h2 class="mt-2 text-center text-3xl font-bold tracking-tight text-base-content">
        This is where our GUI will render
    </h2>
    <p class="text-center mt-1">
        Placeholder for Grafana
    </p>
</div> -->

<div class="stat place-items-center shadow">
  
    <div class="stat place-items-center">
      <div class="stat-title">Insert Metric Here</div>
      <div class="stat-value">31K</div>
      <div class="stat-desc">From January 1st to February 1st</div>
    </div>
    
    <div class="stat place-items-center">
      <div class="stat-title">BytesInPerSec</div>
      <div class="stat-value text-secondary">9,001</div>
      <div class="stat-desc text-secondary">↗︎ 40 (2%)</div>
    </div>
    
    <div class="stat place-items-center">
      <div class="stat-title">BytesOutPerSec</div>
      <div class="stat-value">9,000</div>
      <div class="stat-desc">↘︎ 90 (14%)</div>
    </div>

    <script lang="js" context="module">
      import Iframe from './Iframe.svelte';
        let fullSlug;
    
        export async function load({ page }) {
        fullSlug = `${page.params.slug}?${page.query.toString()}`;
        console.log(`Loading: ${fullSlug}`);
        return true
      }
    </script>
    <iframe title="grafana" src="https://benjam26.grafana.net/d-solo/Ax-9LJsGz/kminion-cluster-dashboard-prometheus-exporter-for-apache-kafka?orgId=1&from=1689149946829&to=1689171546829&panelId=16" width="450" height="200" frameborder="0"></iframe>
    
  </div>