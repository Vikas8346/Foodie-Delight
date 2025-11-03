#!/bin/bash

# Foodie Delight - Quick Launch Script
# This script helps you quickly open the website in your default browser

echo "🍽️  Foodie Delight Restaurant Website"
echo "======================================"
echo ""
echo "Which page would you like to open?"
echo ""
echo "1) Quick Start Guide"
echo "2) Homepage"
echo "3) Menu Page"
echo "4) Admin Dashboard"
echo "5) Exit"
echo ""
read -p "Enter your choice (1-5): " choice

case $choice in
    1)
        echo "Opening Quick Start Guide..."
        if command -v xdg-open > /dev/null; then
            xdg-open QUICKSTART.html
        elif command -v open > /dev/null; then
            open QUICKSTART.html
        else
            echo "Please open QUICKSTART.html in your browser manually"
        fi
        ;;
    2)
        echo "Opening Homepage..."
        if command -v xdg-open > /dev/null; then
            xdg-open index.html
        elif command -v open > /dev/null; then
            open index.html
        else
            echo "Please open index.html in your browser manually"
        fi
        ;;
    3)
        echo "Opening Menu Page..."
        if command -v xdg-open > /dev/null; then
            xdg-open menu.html
        elif command -v open > /dev/null; then
            open menu.html
        else
            echo "Please open menu.html in your browser manually"
        fi
        ;;
    4)
        echo "Opening Admin Dashboard..."
        echo "Login credentials: admin / admin123"
        if command -v xdg-open > /dev/null; then
            xdg-open admin.html
        elif command -v open > /dev/null; then
            open admin.html
        else
            echo "Please open admin.html in your browser manually"
        fi
        ;;
    5)
        echo "Goodbye! Enjoy Foodie Delight! 🍕"
        exit 0
        ;;
    *)
        echo "Invalid choice. Please run the script again."
        exit 1
        ;;
esac

echo ""
echo "✅ Done! The page should open in your default browser."
echo ""
