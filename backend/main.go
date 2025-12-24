package main

import (
	"log"
	"net/http"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

type Lead struct {
	Name        string `json:"name" binding:"required"`
	Email       string `json:"email" binding:"required,email"`
	Phone       string `json:"phone" binding:"required"`
	ProjectType string `json:"project_type" binding:"required"`
}

func main() {
	r := gin.Default()

	// CORS Configuration
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:5173"} // Vite frontend
	config.AllowMethods = []string{"POST", "OPTIONS"}
	config.AllowHeaders = []string{"Origin", "Content-Type"}
	r.Use(cors.New(config))

	// Routes
	r.POST("/api/contact", handleContact)

	// Start server
	log.Println("Server starting on :8080")
	r.Run(":8080")
}

func handleContact(c *gin.Context) {
	var lead Lead
	if err := c.ShouldBindJSON(&lead); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// In a real app, send email or save to DB.
	// For now, prompt logging is sufficient proof of concept.
	log.Printf("New Lead Received: %+v\n", lead)
	log.Printf("Saving lead at %s\n", time.Now().String())

	c.JSON(http.StatusOK, gin.H{
		"message": "Lead received successfully",
		"data":    lead,
	})
}
