# Use a Rust base image with Cargo installed
FROM rust:1.78.0 AS builder

RUN apt-get update && apt-get install -y build-essential cmake

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the Cargo.toml and Cargo.lock files
COPY Cargo.toml Cargo.lock ./

# Now copy the source code
COPY ./src ./src

# Build your application
RUN cargo build --release

# Start a new stage to create a smaller image without unnecessary build dependencies
FROM debian:buster-slim

# Copy the built binary from the previous stage
COPY --from=builder /usr/src/app/target/release/server /usr/local/bin/server

# Command to run the application
CMD ["./server"]