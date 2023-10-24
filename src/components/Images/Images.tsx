function Images({ urls }: { urls: string[] }) {
  const onLoad = () => {
    console.log('loaded')
  }
  return (
    <>
      {urls.map((url) => (
        <img src={url} onLoad={onLoad} key={url} alt='product' />
      ))}
    </>
  )
}
export default Images
