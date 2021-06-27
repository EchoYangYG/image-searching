// class App extends React.Component{
//   state = {
//     images:[]
//   }

//   handleGetRequest = async (e) =>{
//     e.preventDefault()
//     const url ="https://api.unsplash.com/search/photos?page=1&query=${e}&client_id=SPInJO4rdl9Rv1lTehjZX-m6Wg8A5VaBnSFvwKJ7Y-I"
//     const request = await fetch(url)
//     const response = await request.json()
//     this.setState({images:response})
//     console.log(this.state.images)
//   }


//   render(){
//     return(
//       <div>
//         <ImageSearch handleGetRequest={this.handleGetRequest} />
//       </div>
//     )
//   }
// }