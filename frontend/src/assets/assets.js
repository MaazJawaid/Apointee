import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. John Smith',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '5 Years',
        about: 'Dr. John Smith is passionate about holistic healthcare, with a strong emphasis on patient education and wellness. He ensures personalized care, prioritizing long-term health outcomes and overall wellbeing.',
        fees: 70,
        address: {
            line1: '12th Cross, Elm Street',
            line2: 'Main Road, London'
        },
        email: 'john.smith@example.com',
        password: 'password123'
    },
    {
        _id: 'doc2',
        name: 'Dr. Olivia Turner',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Olivia Turner is dedicated to providing compassionate care for women of all ages, specializing in reproductive health, prenatal care, and gynecological surgeries.',
        fees: 80,
        address: {
            line1: '22nd Cross, Maple Avenue',
            line2: 'Central Park, London'
        },
        email: 'olivia.turner@example.com',
        password: 'password123'
    },
    {
        _id: 'doc3',
        name: 'Dr. Maria Gonzalez',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Maria Gonzalez focuses on skin health, offering advanced treatments for acne, eczema, and other dermatological conditions. Her approach combines medical expertise with aesthetic treatments.',
        fees: 40,
        address: {
            line1: '32nd Cross, Oak Street',
            line2: 'Near Riverside, London'
        },
        email: 'maria.gonzalez@example.com',
        password: 'password123'
    },
    {
        _id: 'doc4',
        name: 'Dr. Ethan Clark',
        image: doc4,
        speciality: 'Pediatrician',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Ethan Clark specializes in pediatric care, ensuring the well-being of children from birth to adolescence. He focuses on preventive care, vaccinations, and early detection of developmental issues.',
        fees: 50,
        address: {
            line1: '42nd Cross, Pine Road',
            line2: 'Lakeview, London'
        },
        email: 'ethan.clark@example.com',
        password: 'password123'
    },
    {
        _id: 'doc5',
        name: 'Dr. Isabella Roberts',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '5 Years',
        about: 'Dr. Isabella Roberts is an expert in the diagnosis and treatment of neurological disorders, focusing on conditions such as epilepsy, migraines, and neurodegenerative diseases.',
        fees: 75,
        address: {
            line1: '52nd Cross, Birch Avenue',
            line2: 'West End, London'
        },
        email: 'isabella.roberts@example.com',
        password: 'password123'
    },
    {
        _id: 'doc6',
        name: 'Dr. Benjamin Davis',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '6 Years',
        about: 'Dr. Benjamin Davis brings a wealth of experience in treating complex neurological conditions, offering innovative treatments for patients with chronic pain, brain injuries, and spinal disorders.',
        fees: 90,
        address: {
            line1: '62nd Cross, Willow Street',
            line2: 'Sunnydale, London'
        },
        email: 'benjamin.davis@example.com',
        password: 'password123'
    },
    {
        _id: 'doc7',
        name: 'Dr. Amelia Johnson',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '5 Years',
        about: 'Dr. Amelia Johnson offers comprehensive medical care, with a focus on treating acute and chronic conditions. She believes in a patient-centered approach to healthcare, fostering trust and communication.',
        fees: 65,
        address: {
            line1: '72nd Cross, High Street',
            line2: 'Greenwich, London'
        },
        email: 'amelia.johnson@example.com',
        password: 'password123'
    },
    {
        _id: 'doc8',
        name: 'Dr. Natalie Adams',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Natalie Adams offers a wide range of gynecological services, from routine exams to advanced treatments. She specializes in women’s health, particularly fertility treatments and menopause care.',
        fees: 85,
        address: {
            line1: '82nd Cross, Cedar Lane',
            line2: 'Parkwood, London'
        },
        email: 'natalie.adams@example.com',
        password: 'password123'
    },
    {
        _id: 'doc9',
        name: 'Dr. Sophia Martin',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Sophia Martin is committed to providing the best care for skin conditions such as acne, eczema, and psoriasis. She also offers cosmetic dermatology services to improve skin aesthetics.',
        fees: 45,
        address: {
            line1: '92nd Cross, River Road',
            line2: 'Meadowview, London'
        },
        email: 'sophia.martin@example.com',
        password: 'password123'
    },
    {
        _id: 'doc10',
        name: 'Dr. Lucas Moore',
        image: doc10,
        speciality: 'Pediatrician',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Lucas Moore offers exceptional pediatric care, focusing on growth and development, immunizations, and addressing common childhood health issues.',
        fees: 55,
        address: {
            line1: '102nd Cross, Valley Drive',
            line2: 'Hilltop, London'
        },
        email: 'lucas.moore@example.com',
        password: 'password123'
    },
    {
        _id: 'doc11',
        name: 'Dr. Chloe Taylor',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '5 Years',
        about: 'Dr. Chloe Taylor specializes in treating patients with neurological conditions, including strokes, multiple sclerosis, and Alzheimer’s. She employs the latest medical advancements in her treatments.',
        fees: 80,
        address: {
            line1: '112th Cross, Chestnut Road',
            line2: 'Silverstone, London'
        },
        email: 'chloe.taylor@example.com',
        password: 'password123'
    },
    {
        _id: 'doc12',
        name: 'Dr. William Harris',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '6 Years',
        about: 'Dr. William Harris provides expert care for patients with neurological diseases, focusing on individualized treatments and the management of chronic conditions.',
        fees: 95,
        address: {
            line1: '122nd Cross, Elmwood Street',
            line2: 'Bridgeport, London'
        },
        email: 'william.harris@example.com',
        password: 'password123'
    },
    {
        _id: 'doc13',
        name: 'Dr. Eva Wilson',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '5 Years',
        about: 'Dr. Eva Wilson is a highly skilled general physician with a passion for preventive care, educating her patients about maintaining long-term health through lifestyle choices and regular checkups.',
        fees: 60,
        address: {
            line1: '132nd Cross, Rose Avenue',
            line2: 'Seaview, London'
        },
        email: 'eva.wilson@example.com',
        password: 'password123'
    },
    {
        _id: 'doc14',
        name: 'Dr. Ethan Thomas',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Ethan Thomas provides compassionate gynecological care, from adolescent to menopausal health, focusing on reproductive wellness and surgical procedures when necessary.',
        fees: 90,
        address: {
            line1: '142nd Cross, Birch Avenue',
            line2: 'Lakeside, London'
        },
        email: 'ethan.thomas@example.com',
        password: 'password123'
    },
    {
        _id: 'doc15',
        name: 'Dr. Olivia Walker',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Olivia Walker specializes in skin care, offering advanced treatments for acne, pigmentation issues, and other skin conditions, as well as cosmetic dermatology procedures.',
        fees: 50,
        address: {
            line1: '152nd Cross, Sunset Boulevard',
            line2: 'Windy Hills, London'
        },
        email: 'olivia.walker@example.com',
        password: 'password123'
    }
]
