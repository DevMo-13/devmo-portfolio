
exports.onCreatePage = async ({ page, actions }) => {
	const { createPage } = actions;
  
	if (page.path.match(/^\/project-details/)) {
		page.matchPath = '/project-details/*';
	
		createPage(page);
	}
};

// exports.createPages = ({ graphql, actions }) => {
// 	const { createPage } = actions;
  
// 	const allProjectsQuery = `{
// 		allDataJson {
// 			edges {
// 			  node {
// 				projects {
// 					slug
// 					id
// 					projName
// 					description
// 					githubLink
// 					liveLink
// 					technologies
// 					otherImage1 {
// 						path
// 						alt
// 				  }
// 				}
// 			  }
// 			}
// 		  }
// 		}
// 	}`;
// };