echo "Exporting GCLOUD_PROJECT and GCLOUD_BUCKET"
export GCLOUD_PROJECT=$DEVSHELL_PROJECT_ID
export GCLOUD_BUCKET=$DEVSHELL_PROJECT_ID-media

echo "Installing dependencies"
npm install

echo "Project ID: $DEVSHELL_PROJECT_ID"

echo "Deploying App Engine app. This may take some time..."
gcloud app deploy ./app.yaml
