pipeline {
    environment {
        DOKER_CONTAINER_NAME = "container_tarhouni"
        DOCKERHUB_CREDENTIALS = credentials('docker_token_tarhouni')
                    }


          agent any
          stages {

          stage('Récupiration de code depuis GItHub') {
          steps{
            echo 'code pulled ok'
          }}
            stage('Build Docker Image') {
            steps {
                sh 'docker build -t hmproject_by_tarhouni .'
            }}

            stage('Tag and Push Docker Image') {
          steps {
              script {
            sh "docker tag hmproject_by_tarhouni tarhouniabdel/hmprojectar:latest"
            sh "echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin"
            sh 'docker push tarhouniabdel/hmprojectar:latest'
        }
            }
           post {
             always {
            sh 'docker logout'
                    }
                }

          }

            stage('Run Docker Container') {
            steps {
                script {
                    // Run the container
                    sh "docker run -d --name hmproject_by_tarhouni2024_container115 -p 7082:80 hmproject_by_tarhouni"
                         }

                 }}
                     }
        }












