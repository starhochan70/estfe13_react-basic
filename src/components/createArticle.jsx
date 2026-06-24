function CreateArticle(onSubmit) {
  console.log("CreateArticle render");
  return (
    <>
      <h2>Create Article</h2>
      <form
        action=""
        onSubmit={e => {
          e.preventDefault();
          console.log(e.target.title.value);
          console.log(e.target.desc.value);
          onSubmit(e.target.title.value, e.target.desc.value);
        }}
      >
        <div>
          <label htmlFor="title">title</label>
          <input type="text" name="title" id="title" />
        </div>
        <div>
          <label htmlFor="desc">desc</label>
          <textarea name="desc" id="desc"></textarea>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}
export default CreateArticle;
