<img width="1470" alt="Screenshot 2024-01-25 at 13 41 48" src="https://github.com/SargsyanSevak/react-music-player-interface/assets/107807929/f705cf97-7533-4331-99cc-0772db8bcfb9">



# React Music Player Interface with Music Upload Form
Objective: Develop a comprehensive React component that not only replicates
the music player interface as per the provided screenshot but also includes a form
for users to upload music files from their computer.

# Requirements:
# Data Structure:
● Define or extend a data model for songs to include fields like
songName, artistName,trackNumber and optionally file for the
uploaded music data.

# Components to Create:

● SongList: A component to display the list of songs.

● SongRow: A subcomponent to render individual song details within
SongList.

● PlayAllButton: A button to initiate playing all songs (simulated).

● AddAllButton: A button to add all songs to a queue (simulated).

● MusicUploadForm: A new component below the song list for users
to upload music files.

# Music Upload Form Features:
● Accepts audio file types like .mp3, .wav.

● Displays the selected file name.

● Has an upload button that is enabled upon file selection.

● Simulates a file upload process with a mock progress indicator.

Styling:
● Ensure the design is consistent with the provided screenshot and
add similar styling to the MusicUploadForm.

● Use CSS or styled-components for a cohesive look and feel.
State Management:

● Handle the state for the list of songs and the file selected for upload.

● Consider using the React Context API or Redux if global state management
becomes necessary.

# Interactivity:
● Implement hover effects for the song rows.

● Print messages to the console on button clicks for Play All, Add
All, and file uploads.

● The upload button should handle the mock upload process, with a
timeout to simulate network latency.

# Deliverables:
● A functional React application created with Create React App.

● The source code should include the new MusicUploadForm component.

● The components should be well-documented with comments.

● A README file that provides:

● An overview of the component structure.

● The state management approach.

● Instructions on how to run the application locally.

● Any assumptions or additional features implemented.

● Include basic unit tests for the components using Jest or React Testing
Library.
# Additional Notes:

● For the MusicUploadForm, assume the backend API is not yet available,
but structure the component so that integrating with an API can be done
with minimal changes.

● Accessibility is important; ensure that the form is accessible with proper
labels and ARIA attributes.

● The UI should be responsive and maintain the layout across different
screen sizes.

● Even though the music upload is simulated, the application should handle
file selection and button state changes as if it were a real feature.

● Provide visual feedback for the user during the "upload" process, such as a
spinner or progress bar.

● Include error handling in the form to simulate and display upload errors.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
