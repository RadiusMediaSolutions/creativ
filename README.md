<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://skynet.gatsbyjs.io/">
    <img alt="Gatsby" src="./src/images/logo-small.png" width="60" />
  </a>
</p>
<h1 align="center">
  SkyNet Professional Solutions
</h1>

GatsbyJS is a popular static site generator that allows developers to create blazing-fast websites with ease. Combined with a headless CMS like Contentful, you can build a powerful website with dynamic content that can be updated without having to touch any code. We'll walk you through the steps to build your first GatsbyJS website with Contentful.

## 🚀 Quick start

1.  **Set up a GatsbyJS project**

    The first step is to set up a GatsbyJS project. You'll need to have Node.js installed on your machine to get started. Open a terminal window and run the following command:
    Use the Gatsby CLI ([install instructions](https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli)).

    ```shell
    npm install -g gatsby-cli
    ```

    This will install the GatsbyJS command-line interface globally on your machine. Now you can create a new GatsbyJS project by running the following command:

    ```shell
    gatsby new my-first-gatsby-site
    ```

    Replace "my-first-gatsby-site" with the name of your project.

2.  **Install the Contentful plugin.**

    The next step is to install the Contentful plugin for GatsbyJS. Run the following command in your terminal:

    ```shell
    npm install gatsby-source-contentful
    ```

    This plugin will allow you to pull content from your Contentful CMS and use it to create dynamic pages on your GatsbyJS website.

3.  **Set up Contentful**

    Now it's time to set up your Contentful account. Sign up for a free account here (https://www.contentful.com/) and create a new space for your website content. Then, create a content model that will define the structure of your website's content.

4.  **Configure the Contentful plugin**

    Once you have your Contentful account set up, you need to configure the plugin in your GatsbyJS project. Open the gatsby-config.js file in your project and add the following code:

    ```shell
    	module.exports = {
    		plugins: [
    			{
    			resolve: "gatsby-source-contentful",
    			options: {
    				spaceId: "<your_space_id>",
    				accessToken: "<your_access_token>",
    			},
    			},
    	],
    	}
    ```

    Replace "<your_space_id>" and "<your_access_token>" with the respective values from your Contentful account.

5.  **Build your first page**

    Now you can start building your first page with Contentful data. Create a new file in your GatsbyJS project's pages directory and add the following code:

        ```shell
        	import React from "react"
        	import { graphql } from "gatsby"

        	export default function Home({ data }) {
        	return (
        			<div className="text_Section3">
        				<div className="innerTitle">
        					<h2>
        						<span>{clientName}</span>
        					</h2>
        				</div>
        				<p>{description}</p>
        				<p>{projectDetails.projectDetails}</p>
        			</div>
        	)
        	}

        	export const query = graphql`
        	query ($slug: String) {
        		client: contentfulRecentProjects(slug: { eq: $slug }) {
        			clientName
        			slug
        			description
        			projectDetails {
        				projectDetails
        			}
        		}
        	}

        	`
        ```

    This code imports the necessary packages, defines the Home component, and queries the Contentful API for the homepage content. You can replace "contentfulHomePage" with the name of the content type you created in Contentful.

6.  **Run your GatsbyJS project**
    Finally, you can run your GatsbyJS project and see your first page with dynamic content! In your terminal, navigate to your project directory and run the following command:

    ```shell
    gatsby develop
    ```

    This will start a development server at http://localhost:8000 where you can see your website. Any changes you make to your Contentful content will be reflected on your website in real-time.

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby Tutorial](https://www.gatsbyjs.com/docs/tutorial/part-4/#use-graphiql-to-explore-the-data-layer-and-write-graphql-queries)._

    building a GatsbyJS website with Contentful is a great way to create a powerful, dynamic website with minimal coding. By following these simple steps, you can have your first website up and running in no time. Happy coding!

## 🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-default)

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

-   **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

-   **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[Build, Deploy, and Host On The Only Cloud Built For Gatsby](https://www.gatsbyjs.com/products/cloud/)

Gatsby Cloud is an end-to-end cloud platform specifically built for the Gatsby framework that combines a modern developer experience with an optimized, global edge network.

<!-- AUTO-GENERATED-CONTENT:END -->

```

```
