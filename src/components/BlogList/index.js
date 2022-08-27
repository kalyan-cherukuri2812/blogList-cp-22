import './index.css'

import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsListDetails} = props
  return (
    <ul>
      {blogsListDetails.map(each => (
        <BlogItem key={each.id} blogsListDetails={each} />
      ))}
    </ul>
  )
}

export default BlogList
