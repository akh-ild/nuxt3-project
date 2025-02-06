export default defineEventHandler((event) => {
  console.log(event);
  return {
    api: 'hello from routes folder'
  }
})
