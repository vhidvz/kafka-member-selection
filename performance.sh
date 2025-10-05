#!/bin/bash

# Number of parallel requests to run
PARALLEL_REQUESTS=15

# Function to make a single GET request
make_request() {
    # Generate random integer between 0 and 14
    id=$((RANDOM % 15))
    url="http://localhost:3000/${id}"
    echo "Making request to $url"
    # Use curl to make the GET request, with timeout and silent mode
    curl -s -m 5 "$url" > /dev/null
}

# Export the function so it can be used by parallel
export -f make_request

# Main loop to run requests indefinitely
while true; do
    # Run PARALLEL_REQUESTS number of requests in parallel
    seq $PARALLEL_REQUESTS | xargs -I {} -P $PARALLEL_REQUESTS bash -c 'make_request'
    # Optional: Add a small delay between batches to avoid overwhelming the system
    sleep 0.05
done