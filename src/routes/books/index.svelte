<script context="module">
  import {client, BOOKS} from './data';
  import { gql } from 'apollo-boost';

  export async function preload() {
    return {
      cache: await client.query({
        query: BOOKS
      })
    }
  }
</script>

<script>
  import { getClient, restore, query } from 'svelte-apollo';
  
  export let cache;
  restore(client, BOOKS, cache.data);

  const books = query(client, { query: BOOKS });

  function reload() {
    books.refetch();
  }
</script>

<svelte:head>
	<title>Books</title>
</svelte:head>

{#await $books}
  Loading won't be shown if preloaded
{:then result}
Results: {JSON.stringify(result)}
{/await}