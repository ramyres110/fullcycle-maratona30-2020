package actions

import (
	"net/http"

	"github.com/gobuffalo/buffalo"
)

// HelloHandler is a default handler to serve up
// a home page.
func HelloHandler(c buffalo.Context) error {
	return c.Render(http.StatusOK, r.JSON("Hello Full Cycle"))
}
