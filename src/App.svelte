<script>
	import {onMount} from 'svelte';
	import {
		f7,
		f7ready,
		App,
		View, Card, Button, Page,
	} from 'framework7-svelte';
</script>

<App>
	<View main>

		<Page>
			<h1>Framework7-Svelte</h1>
			<Card
					content="This is a simple card with plain text, but cards can also contain their own header, footer, list view, image, or any other element."
			/>
			<Card
					title="Card header"
					content="Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions."
			/>
			<Card>
					<Button on:click={() => f7.dialog.alert('Hello World!')}>
						Click me!
						</Button>
			</Card>
		</Page>
	</View>
</App>
<style>
	:global(body) {
		--f7-page-master-detail-width: 33%;
	}
</style>