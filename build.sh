#!/bin/bash

# Shellscript to build, tag and push to local registry the new docker image.
# Author: https://github.com/antoniosarro
# Version: 1.0.0
# Date: 2024-05-30
# Usage: ./build.sh

# Get the directory of the script
script_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

# Get the .env file path
env_file="$script_dir/.env"

# Get package.json file
package_json="$script_dir/package.json"

# Check if the .env file exists
if [ -f "$env_file" ]; then
    env_arr=( $(cat $env_file) )

    # Build arguments string (initialize as empty)
    build_args=""

    # Loop through each element in the env_arr
    for item in "${env_arr[@]}"; do
        # Split each item at the first '=' sign (avoid spaces in values)
        IFS='=' read -r key value <<< "$item"

        # Build the argument string (append with spaces)
        build_args="$build_args --build-arg $key=$value"
    done

    # Check if there is an old image already builded.
    # If there is an already latest image delete it with all related images using the IMAGE ID
    # and then build the new image
    if [ "$(docker images -q antoniosarro_v2.dev:latest 2> /dev/null)" != "" ]; then
        docker rmi -f "$(docker images -q antoniosarro_v2.dev:latest)"
    fi

    # Get version from package.json
    VERSION=$(jq -r '.version' package.json)

    # Remove leading space from arguments string
    build_args="${build_args:1}"

    # Build the image the tag version and latest
    docker build -t antoniosarro_v2.dev:"$VERSION" $build_args .
    docker tag antoniosarro_v2.dev:"$VERSION" antoniosarro_v2.dev:latest

    # Tag the image to push it to the registry
    docker tag antoniosarro_v2.dev:latest 10.10.70.6:5000/antoniosarro_v2.dev:latest
    docker tag antoniosarro_v2.dev:"$VERSION" 10.10.70.6:5000/antoniosarro_v2.dev:"$VERSION"

    # Push the image to the registry
    docker push 10.10.70.6:5000/antoniosarro_v2.dev:"$VERSION"
    docker push 10.10.70.6:5000/antoniosarro_v2.dev:latest
else
    echo "File .env does not exist in the same directory as the script."
fi