pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/nijinnath/NodeJenkinIntegrationInDocker.git'
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }  
  }
}
