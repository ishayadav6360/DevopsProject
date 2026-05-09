pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git 'YOUR_GITHUB_REPO_LINK'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'No tests available'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t gym-fitness-app .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh 'docker run -d -p 3000:3000 gym-fitness-app'
            }
        }
    }
}