# Big OMG

Big OMG is a React application that analyzes the time complexity of user-inputted code. It helps developers optimize their algorithms by providing insights into the performance of their code using AI models.

## Features

- **Code Analysis**: Input your code and get instant time complexity analysis
- **Multiple AI Models**: Choose from Claude Opus 4 and GPT-4.1 for analysis
- **Markdown Rendering**: Explanations are rendered in beautiful markdown format
- **Responsive Design**: Works on desktop and mobile devices
- **Real-time Analysis**: Get results instantly after submitting your code

## Prerequisites

Before running this application, make sure you have:

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)
- **Backend API** running (see [Backend Repository](https://github.com/Qlwentt/big-omg-api))

## Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd big-omg-react
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Backend URL

Make sure your backend API is running and update the API endpoint in your configuration if needed. The application expects the backend to be available at the URL specified in your API configuration.

### 4. Start the Development Server

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

## How the Code Works

### Project Structure

```
src/
├── components/
│   ├── AppContainer.jsx    # Main layout container
│   ├── Form.jsx           # Code input and model selection
│   ├── AnswerArea.jsx     # Results display
│   └── Logo.jsx           # Application logo
├── hooks/
│   └── useFetchBigO.js    # Custom hook for API calls
├── helpers/
│   └── appContext.js      # React context for state management
├── api/
│   ├── queryClient.js     # React Query configuration
│   └── axiosInstance.js   # Axios HTTP client setup
└── App.jsx                # Root component
```

### Key Components

#### AppContainer.jsx

- **Purpose**: Main layout container that divides the screen into two columns
- **Layout**: Uses flexbox to create a responsive two-column layout
- **Structure**:
  - Header with logo
  - Left column: Form (code input + model selection)
  - Right column: Answer area (results display)

#### Form.jsx

- **Purpose**: Handles user input and form submission
- **Features**:
  - Model selector dropdown (Claude Opus 4, GPT-4.1)
  - Code textarea for algorithm input
  - Analyze button for submission
- **State Management**: Uses React hooks for form state and API calls

#### AnswerArea.jsx

- **Purpose**: Displays analysis results
- **Features**:
  - Time complexity display
  - Explanation with markdown rendering
  - Scrollable content area
- **Markdown Support**: Uses `react-markdown` for rich text formatting

### State Management

The application uses React Context (`AppContext`) to manage global state:

```javascript
// Context provides:
- bigOData: Analysis results from the API
- setBigOData: Function to update results
- isLoading: Loading state for UI feedback
- setIsLoading: Function to update loading state
```

### API Integration

#### useFetchBigO Hook

- **Purpose**: Custom hook for making API calls to the backend
- **Features**:
  - Sends code and selected model to backend
  - Handles loading states
  - Manages error handling
  - Updates global state with results

#### API Flow

1. User selects a model and enters code
2. Form submission triggers API call via `useFetchBigO`
3. Backend processes the code and returns analysis
4. Results are displayed in the AnswerArea with markdown formatting

### Styling

The application uses **styled-components** for CSS-in-JS styling:

- **Dark Theme**: Consistent dark background (#02000f)
- **Responsive Design**: Flexbox layouts that adapt to screen size
- **Custom Components**: Styled form elements, buttons, and containers
- **Markdown Styling**: Custom styles for code blocks, headers, lists, etc.

## Usage

### Basic Workflow

1. **Select a Model**: Choose between Claude Opus 4 or GPT-4.1 from the dropdown
2. **Enter Your Code**: Paste or type your algorithm in the code textarea
3. **Analyze**: Click the "Analyze" button to submit your code
4. **View Results**: See the time complexity and detailed explanation

### Example Code Input

```python
def twoSum(self, nums: List[int], target: int) -> List[int]:
    numsDict = {}
    for i, num in enumerate(nums):
        complement = target - num
        foundIndex = numsDict.get(complement, None)
        if foundIndex is not None:
            return [foundIndex, i]
        else:
            numsDict[num] = i
```

### Expected Output

- **Time Complexity**: O(n)
- **Explanation**: Detailed markdown-formatted explanation of the algorithm's performance characteristics

## Deployment

The application is deployed at: https://big-omg-react.uw.r.appspot.com/

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` directory.

## Backend Requirements

This frontend requires the backend API to be running. The backend should:

- Accept POST requests with code and model parameters
- Return JSON with `big_o` (time complexity) and `explanation` fields
- Support the models: `claude-opus-4-20250514` and `gpt-4.1`

Backend repository: https://github.com/Qlwentt/big-omg-api

## Troubleshooting

### Common Issues

1. **API Connection Errors**: Ensure the backend is running and accessible
2. **Model Selection Issues**: Verify the backend supports the selected model
3. **Styling Issues**: Check that all dependencies are properly installed

### Development Tips

- Use browser developer tools to inspect the layout and debug styling issues
- Check the Network tab to monitor API calls
- Use React Developer Tools to inspect component state

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request
