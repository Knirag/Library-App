<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8">
    <title>Library App</title>
    <link rel="stylesheet" href="lib.css">
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
    <script src="lib.js"></script>
</head>

<body>
    <div class="sidebar">
        <div class="sidebar-header">
            <i class="fas fa-bars" id="btnOpen"></i>
            <i class="fas fa-times" id="btnClose"></i>
            <header>Books:</header>
        </div>
        <ul>
            <li class="active"><a href="javascript:void(0);" onclick="changeBook(0)">Treasure Island</a></li>
            <li><a href="javascript:void(0);" onclick="changeBook(1)">Frankenstein</a></li>
            <li><a href="javascript:void(0);" onclick="changeBook(2)">A Tale of Two Cities</a></li>
            <li><a href="javascript:void(0);" onclick="changeBook(3)">Black Beauty</a></li>
            <li><a href="javascript:void(0);" onclick="changeBook(4)">Gullivers Travels</a></li>
        </ul>
    </div>
    <div class="main-content">
        <div class="book-info" id="bookInfo">
            <img src="book1.jpg" alt="Book Cover">
            <h1>Treasure Island</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </div>
    </div>
</body>

</html>
