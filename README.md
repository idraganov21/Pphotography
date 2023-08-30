# Polina's Portfolio

A beautifully designed portfolio website showcasing Polina's photography work and other creative endeavors.


## Features

- Responsive design suitable for all devices.
- Multi-language support (English and Bulgarian).
- Smooth navigation between sections.
- Integration with Cloudinary for media asset management.
- Elegant display of portfolio items.
- Social media links for easy reach out.
  
## Tech Stack

- Next.js
- Swiper for Carousel and Sliders
- Cloudinary for Image Hosting
- next-i18next for i18n
- Vercel for deployment

## Local Development

### Prerequisites:

- Node.js
- npm or yarn

### Steps:

1. Clone the repository:

    ```bash
    git clone [URL_TO_YOUR_GITHUB_REPO]
    ```

2. Navigate to the project directory:

    ```bash
    cd path_to_project_directory
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the root of the project and set your Cloudinary `cloudName`:

    ```env
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    ```

5. Run the development server:

    ```bash
    npm run dev
    ```

The website should now be running on `http://localhost:3000/`.

## Deployment

The project is deployed on Vercel. Any commits to the main branch will trigger a new deployment.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgements

- Swiper.js team for their excellent carousel library.
- Next.js and Vercel for a streamlined development and deployment process.
- Cloudinary team for making image management easier.
