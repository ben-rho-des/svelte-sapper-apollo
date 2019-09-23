<script>
	import Button from '../components/Button.svelte';
	import Link from '../components/Link.svelte';
	import Input from '../components/Input.svelte';

	import Icon from '../components/Icon.svelte';

	import Search from '../components/Search.svelte';
</script>


<svelte:head>
	<title>Test</title>
</svelte:head>

<h1>Test 2 this site</h1>

<p>This is the 'test' page. There's not much here.</p>

<Button>hello</Button>

<br/>

<Button>hello2</Button>

<br/>

<Link>Hello</Link>

<br/>

<Link variation="button">hello</Link>

<br/>

<Link>Hello <strong>yo</strong></Link>

<br/>

<Link>Hello <Icon/></Link>

<br/>

<Link>Hello <Icon icon="plus" /></Link>

<br/>

<Input placholder="yoyoyo" />

<br/>

<Search />