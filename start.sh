#!/bin/bash

clear

npm run build && npm run start

# Pause and wait for user input
read -p "Press any key to continue..."
