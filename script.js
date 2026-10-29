//your code here
  <script>
        $(document).ready(function () {
            $('#myCarousel').carousel({
                interval: false,
                ride: false
            });

            $('#myCarousel .left').click(function (e) {
                e.preventDefault();
                $('#myCarousel').carousel('prev');
            });

            $('#myCarousel .right').click(function (e) {
                e.preventDefault();
                $('#myCarousel').carousel('next');
            });
        });
    </script>