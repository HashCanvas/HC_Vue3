<template>
    <div class="contact-card">
        <h3 class="card-title">Contact Us</h3>
        <input
            placeholder="Name*"
            v-model="name"
            class="input-card" />
        <input
            placeholder="Email*"
            v-model="email"
            class="input-card" />
        <textarea v-model="message" class="input-card" rows="2">Message</textarea>
        <button class="input-button">Join Now</button>
    </div>
</template>
<script lang="ts">

export default {
    components: {},
	name: "ContactCard",
	props: {
		icon: String,
		title: String,
		fullDescription: String,
        chartURL: String,
        usersubscribed: Boolean,
        imageURL: String,
	},
};
</script>

<style lang="scss">
    .contact-card {
        background-color: #1890FF;
        border-top-left-radius: 120px;
        border-bottom-right-radius: 120px;
        border-top-right-radius: 4px;
        border-bottom-left-radius: 4px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 16px;
        line-height: 30px;
        font-weight: 400;

        .card-title {
            color: #fff;
            font-size: 35px;
            line-height: 46px;
            font-weight: 600;
        }
        
        .input-card {
            padding: 10px;
            color: #fff;
            background-color: transparent;
            border: transparent;
            border-bottom: 1px solid #fff;
            opacity: 0.7;

            &:hover {
                opacity: 1;
            }

            &:focus {
                opacity:1 ;
                outline: none;
            }
        }

        ::placeholder {
            color: #fff;
        }
        .input-button {
            width: 158px;
            height: 50px;
			padding: 10px;
			font-size: 14px;
            font-weight: bold;
			line-height: 20px;
			color: #1890FF;
			background-color: #ffffff;
			border: 2px solid #ffffff;
			border-radius: 7px 7px 7px 35px;
			cursor: pointer;
		}
    }
@media screen and (min-width: 761px) {
    .contact-card {
        border-top-left-radius: 80px;
        border-bottom-right-radius: 80px;
        width: 100%;
        height: 400px;
        padding: 33px 23px;
        font-size: 16px;
        line-height: 30px;
        font-weight: 400;
    }
}
@media screen and (min-width: 1600px) {
    .contact-card {
        border-top-left-radius: 120px;
        border-bottom-right-radius: 120px;
        width: 480px;
        height: 633px;
        padding: 85px 63px;
        font-size: 16px;
        line-height: 30px;
        font-weight: 400;
    }
}
@media screen and (max-width: 760px) {
    .contact-card {
        border-top-left-radius: 60px;
        border-bottom-right-radius: 60px;
        border-top-right-radius: 4px;
        border-bottom-left-radius: 4px;
        width: 100%;
        height: 400px;
        padding: 33px 23px;
        font-size: 16px;
        line-height: 30px;
        font-weight: 400;

        .card-title {
            font-size: 20px;
            line-height: 20px;
            font-weight: 600;
        }
    
        .input-card {
            padding: 10px;
            color: #fff;
            background-color: transparent;
            border: transparent;
            border-bottom: 1px solid #fff;
            opacity: 0.7;

            &:hover {
                opacity: 1;
            }

            &:focus {
                opacity:1 ;
                outline: none;
            }
        }

        ::placeholder {
            color: #fff;
        }
        .input-button {
            width: 158px;
            height: 50px;
            padding: 10px;
            font-size: 14px;
            font-weight: bold;
            line-height: 20px;
            color: #1890FF;
            background-color: #ffffff;
            border: 2px solid #ffffff;
            border-radius: 7px 7px 7px 35px;
            cursor: pointer;
        }
    }
}
</style>