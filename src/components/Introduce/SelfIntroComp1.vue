<template>
<div className="Maincontent_SelfIntro">
            <div className="Intro_box_self">
                <p>
                    <img />
                    기본정보
                </p>
                <hr />
                <p>김선우 Kim Sun Woo</p>
                <p>2003.03.21 만 20세</p>
                <p>010-7211-4634</p>
                <p>imsw0321@naver.com</p>
                <p>본전공: 경영학과 | 복수전공: 컴퓨터공학과</p>
            </div>

            <div className="Intro_box_self">
                <p>
                    <img />
                    
                    학력사항
                </p>
                <hr />
                <p>2010.03~2016.02 대전구봉초등학교 졸업</p>
                <p>2016.03~2019.02 대전봉우중학교 졸업</p>
                <p>2019.03~2022.02 대전구봉고등학교 졸업</p>
                <p>2022.03~ 가천대학교 재학중</p>
            </div>

            <div className="Intro_box_self">
                <p>
                    <img />
                    기술</p>
                <hr />
                <p>C언어 ★★☆☆</p>
                <p>React ★★★☆☆</p>
                <p>Python ★★★★☆</p>
                <p>Rcode ★★★☆☆</p>
            </div>

            <div className="Intro_box_self">
                <p>
                    <img />
                    자격증
                </p>
                <hr />
                <p>2022.06 운전면허 2종</p>
                <p>2023.07 컴퓨터활용능력 1급 필기</p>
                <p>2024.03 SQLD 자격증</p>
                <p>2024.03 ADSP 자격증 </p>
            </div>
        </div>
</template>

<script>

</script>

<style>
.Maincontent_SelfIntro {
    padding: 5% 10% 5% 10%;
    display: flex;
    flex-wrap: wrap; 
    justify-content: center;
}

.Intro_box_self {
   /* background-image: url('../../Component/background_image_url.png');*/
    padding: 20px;
    margin-right: 15px; 
    border-radius: 8px;
    box-shadow: 0 0 20px rgb(129, 129, 129);
    width: 350px;
    white-space: pre-wrap;
    margin-bottom: 20px;
}

.Intro_box_self p {
    white-space: pre-line;
    margin: 0;
    line-height: 2.0;
    font-size: 18px;
}


</style>
