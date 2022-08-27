// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogsListDetails} = props
  const {title, description, publishedDate} = blogsListDetails
  return (
    <li>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{publishedDate}</p>
    </li>
  )
}

export default BlogItem
