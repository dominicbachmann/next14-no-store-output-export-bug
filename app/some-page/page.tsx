export default async function Page() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto', {
    cache: 'no-store'
  });

  return <div>Not static anymore</div>
}
