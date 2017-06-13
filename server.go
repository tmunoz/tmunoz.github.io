package main

import (
    "fmt"
    "html/template"
    "log"
    "net/http"
)

func index(w http.ResponseWriter, r *http.Request) {
    t, _ := template.ParseFiles("index.html")
    t.Execute(w, nil)
}

func login(w http.ResponseWriter, r *http.Request) {
    fmt.Println("method:", r.Method) //get request method
    if r.Method == "GET" {
        t, _ := template.ParseFiles("login.html")
        t.Execute(w, nil)
    } else {
        r.ParseForm()
        // logic part of log in
        fmt.Println("username:", r.Form["user"])
        fmt.Println("password:", r.Form["pw"])
    }
}

func main() {
    http.HandleFunc("/", index) // setting router rule
    http.HandleFunc("/login", login)
    err := http.ListenAndServe(":9090", nil) // setting listening port
    if err != nil {
        log.Fatal("ListenAndServe: ", err)
    }
}
