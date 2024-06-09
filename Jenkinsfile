pipeline {
    environment {
        DOKER_CONTAINER_NAME = "AK-container"
        DOCKERHUB_CREDENTIALS = credentials('dockerhub_cred_ak')
                    }


          agent any
          stages {

          stage('Récupiration de code depuis GItHub') {
          steps{
            echo 'code pulled ok'
          }}
            stage('Build Docker Image') {
            steps {
                sh 'docker build -t hmproject_by_awem .'
            }}

            stage('Tag and Push Docker Image') {
          steps {
              script {
            sh "docker tag hmproject_by_awem awemkefi/hm_project:latest"
            sh "echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin"
            sh 'docker push awemkefi/hm_project:latest'
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
                    sh "docker run -d --name hmproject_by_tarhouni-container -p 7088:80 formation_finale"
                         }

                 }}
                     }
        }
