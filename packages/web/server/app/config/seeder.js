import seeder from 'mongoose-seed'
import '@pandamedical/common/settings/config.js'
import { User, Bookingslist, MedicalSpecialty, MedicalCredential } from 'database'
import Labtests from 'constants/labtests'
import config from './config'

// env
const dotenv = require('dotenv')

dotenv.config()

const ModelsArray = []
const LoadModelsArray = []
const inviteCode = `PandaMedical_${config.admin.userId}`
const Admin = {
    model: 'Users',
    documents: [{
        password: config.admin.password,
        email: 'ozichukwu',
        phone: '09034573373',
        firstName: 'Primary',
        lastName: 'Admin',
        role: 'SUPER_ADMIN',
        _id: config.admin.userId,
        username: 'official_pandahealth',
        email: config.admin.email,
        country: 'NGN',
        role: 'SUPER_ADMIN',
        inviteCode,
        phone: '+2347038363702',
        isActive: true,
        isVerified: true,
        isVerifiedByEmail: true,
        gender: 'MALE',
        dateOfBirth: 'Tue Nov 17 1980 20:31:14 GMT+0100 (West Africa Standard Time)',
    }, ],
}

// Connect to MongoDB via Mongoose
seeder.connect(config.mongo.mongodb_uri, { useUnifiedTopology: true }, async function() {
    const user = await User.findOne({ _id: config.admin.userId })
    if (!user) {
        ModelsArray.push('Users')
        LoadModelsArray.push('app/src/database/models/user')
        data.push(Admin)
    }
    // Load Mongoose models
    seeder.loadModels([
        'app/src/database/models/vital.model',
        'app/src/database/models/labTests.model',
        'app/src/database/models/bookingslist.model',
        'app/src/database/models/medicalcredentials.model',
        'app/src/database/models/medicalspecialty.model',
        ...LoadModelsArray,
    ])

    // Clear specified collections
    seeder.clearModels(
        [
            'Vitals',
            'LabTests',
            'Bookingslist',
            'MedicalSpecialty',
            'MedicalCredentials',
            ...ModelsArray,
        ],
        function() {
            // Callback to populate DB once collections have been cleared
            seeder.populateModels(data, function() {
                seeder.disconnect()
            })
        },
    )
})

const data = [{
        model: 'MedicalCredentials',
        documents: [{
                description: 'An MD is commonly referred to as a physician or doctor. A MD has a doctoral degree for physicians awarded by accredited medical schools. A MD works to maintain or restore human health through the study, diagnosis and treatment of disease or injury.',
                title: 'Doctor of Medicine',
                subtitle: 'MD',
                key: 'MD',
            },
            {
                description: 'A DO belongs to a separate, but equal, branch of medicine as a MD. A DO takes in account the musculoskeletal system, physical, mental, emotional and spiritual health of a patient, and how each aspect could contribute to illness.',
                title: 'Doctor of Osteopathic Medicine',
                subtitle: 'DO',
                key: 'DO',
            },
            {
                description: 'It is awarded by medical schools and universities in medical and surgery. As the name suggest they are two separate degree however, in practice they are treated as one and awarded together. The time duration of MBBS course is five or six years.',
                title: 'Bachelor of Medicine and Bachelor of Science',
                subtitle: 'MBBS',
                key: 'MBBS',
            },
        ],
    },
    {
        model: 'MedicalSpecialty',
        documents: [{
                name: 'Allergy and Immunology',
                description: 'An allergist-immunologist diagnoses and manages disorders involving immune system conditions such as asthma, anaphylaxis, rhinitis, and eczema as well as adverse reactions to drugs, foods, and insect stings; also immune deficiency diseases and problems related to autoimmune disease, organ transplantation, or malignancies of the immune system.',
                title: 'allergist / immunologist',
                key: 'allery_and_immunology',
            },
            {
                name: 'Dermatology',
                description: 'A dermatologist is a physician with training and expertise in the diagnosis and medical/surgical management of diseases of the skin, hair and nails, and mucous membranes.',
                title: 'Dermatologist',
                key: 'dermatology',
            },
            {
                name: 'Family Medicine',
                description: 'Family physicians provide front-line health care that is accessible, high quality, comprehensive and continuous over time for people of all ages, life stages, backgrounds and conditions. They care for individuals and for entire families, from birth through the end of life, including a broad range of preventive care; healthy lifestyle counseling; mental health care; care of acute illnesses; management of chronic diseases, including patients with multi-morbidity. When needed, they also provide referral and coordination of care with other specialists.',
                title: 'general practice doctor',
                key: 'family_medicine',
            },
            {
                name: 'Internal Medicine',
                description: 'An internist is a personal physician who provides long-term, comprehensive care in the office and in the hospital, managing both common and complex illnesses of adolescents, adults, and the elderly. Internists are trained in the diagnosis and treatment of cancer, infections, and diseases affecting the heart, blood, kidneys, joints, and the digestive, respiratory, and vascular systems. They are also trained in the essentials of primary care internal medicine, which incorporates an understanding of disease prevention, wellness, substance abuse, mental health, and effective treatment of common problems of the eyes, ears, skin, nervous system, and reproductive organs.',
                title: 'internist',
                key: 'internal_medicine',
            },
            {
                name: 'Obstetrics and Gynecology',
                description: 'An obstetrician/gynecologist focuses on the health of women before, during, and after childbearing years, diagnosing and treating conditions of the reproductive system and associated disorders.',
                title: 'obstetrician-gynecologist',
                key: 'obstetrics_and_gynecology',
            },
            {
                name: 'Ophthalmology',
                description: 'Ophthalmology is a specialty focused on the medical and surgical care of the eyes. Ophthalmologists are the only physicians medically trained to manage the complete range of eye and vision care. They can prescribe glasses and contact lenses, dispense medications, diagnose and treat eye conditions and diseases, and perform surgeries.',
                title: 'ophthalmologist',
                key: 'ophthalmology',
            },
            {
                name: 'Otolaryngology–Head and Neck Surgery',
                description: 'An otolaryngologist–head and neck surgeon provides medical and/or surgical therapy for the prevention of diseases, allergies, neoplasms, deformities, disorders, and/or injuries of the ears, nose, sinuses, throat, respiratory, and upper alimentary systems, face, jaws, and the other head and neck systems. Head and neck oncology, facial, plastic, and reconstructive surgery and the treatment of disorders of hearing and voice are fundamental areas of expertise.',
                title: 'otolaryngologist-head and neck surgeon (ENT specialist)',
                key: 'otolaryngology',
            },
            {
                name: 'Pathology',
                description: 'A pathologist deals with the causes and nature of disease and contributes to diagnosis, prognosis, and treatment through knowledge gained by the laboratory application of the biologic, chemical, and physical sciences. This specialist uses information gathered from the microscopic examination of tissue specimens, cells and body fluids, and from clinical laboratory tests on body fluids and secretions for the diagnosis, exclusion, and monitoring of disease.',
                title: 'pathologist',
                key: 'pathology',
            },
            {
                name: 'Pediatrics',
                description: `Pediatricians practice the specialty of medical science concerned with the physical, emotional, and social health of children from birth to young adulthood. Pediatric care encompasses a broad spectrum of health services ranging from preventive health care to the diagnosis and treatment of acute and chronic diseases. Pediatricians understand the many factors that affect the growth and development of children. They understand that children are not simply small adults. Children change rapidly, and they must be approached with an appreciation for their stage of physical and mental development.`,
                title: 'pediatrician',
                key: 'pediatrics',
            },
            {
                name: 'Psychiatry',
                description: `A psychiatrist specializes in the evaluation and treatment of mental, addictive, and emotional disorders such as schizophrenia and other psychotic disorders, mood disorders, anxiety disorders, substancerelated disorders, sexual and gender-identity disorders, and adjustment disorders.`,
                title: 'psychiatrist',
                key: 'psychiatry',
            },

            {
                name: 'Radiology',
                description: `A radiologist is a physician who uses imaging methodologies to diagnose and manage patients and provide therapeutic options. Physicians practicing in the field of Radiology specialize in Diagnostic Radiology, Interventional Radiology, or Radiation Oncology. They may certify in a number of subspecialties. The board also certifies in Medical Physics and issues specific certificates within each discipline`,
                title: 'Radiologist',
                key: 'radiology',
            },
            {
                name: 'Surgery',
                description: `A Surgeon uses operative measures to treat disease, injuries, and disorders or repair tissues or organs. Surgeons are responsible for the diagnosis and preoperative, operative, and postoperative management
                of patient care. During the course of the operation, the surgeon makes important decisions about the patient’s health, safety, and welfare, working in cooperation with other members of the surgical team. To acknowledge the specialized activities and interests of individuals wanting to become surgeons, the American Board of Surgery offers
                primary certification in Surgery and Vascular Surgery. A variety of subspecialty certificates are offered.`,
                title: 'Surgeon',
                key: 'surgery',
            },

            {
                name: 'Urology',
                description: `A urologist, also known as a genitourinary surgeon, focuses on diagnosing and treating disorders of the urinary tracts of males and females, and on the reproductive system of males. This specialist manages non-surgical problems such as urinary tract infections and benign prostatic hyperplasia, as well as surgical problems such as the surgical management of cancers, the correction of congenital abnormalities, and correcting stress incontinence.`,
                title: 'Urologist',
                key: 'Urology',
            },
        ],
    },
    {
        model: 'Bookingslist',
        documents: [{
                title: 'Doctors',
                key: 'PHYSICIAN',
                description: 'Physicians and Surgeons, Pediatricians,General e.t.c',
            },
            {
                title: 'Healthcare Facilities',
                key: 'HEALTHCARE',
                description: 'Hospital, Hospice e.t.c',
            },
        ],
    },
    {
        model: 'LabTests',
        documents: Labtests,
    },
    {
        model: 'Vitals',
        documents: [{
                title: 'Blood Pressure',
                description: 'the pressure of the blood in the circulatory system, often measured for diagnosis since it is closely related to the force and rate of the heartbeat and the diameter and elasticity of the arterial walls',
                key: 'blood_pressure',
                unit: [{
                        system: 'imperial',
                        symbol: 'mmHg',
                    },
                    {
                        system: 'metric',
                        symbol: 'kPa',
                    },
                ],
                norminal_values: {
                    low: 110,
                    normal: 120,
                    high: 140,
                },
            },
            {
                title: 'Heart Rate',
                description: 'Heart rate is the speed of the heartbeat measured by the number of contractions (beats) of the heart per minute (bpm)',
                key: 'heart_rate',
                unit: [{
                    system: 'metric',
                    symbol: 'bpm',
                }, ],
                norminal_values: {
                    low: 40,
                    normal: 60,
                    high: 100,
                },
            },
            {
                title: 'Oxygen Saturation',
                description: 'Oxygen saturation is the fraction of oxygen-saturated hemoglobin relative to total hemoglobin (unsaturated + saturated) in the blood.',
                key: 'oxygen_saturation',
                unit: [{
                    system: 'metric',
                    symbol: '%',
                }, ],
                norminal_values: {
                    low: 0,
                    normal: 0,
                    high: 0,
                },
            },
            {
                title: 'Temperature',
                description: 'Normal human body-temperature is the typical temperature range found in humans. The normal human body temperature range is typically stated as 36.5–37.5 °C.',
                key: 'temperature',
                unit: [{
                        system: 'imperial',
                        symbol: 'Fahrenheit °F',
                    },
                    {
                        system: 'metric',
                        symbol: 'Celsius °C',
                    },
                ],
                norminal_values: {
                    low: 0,
                    normal: 0,
                    high: 0,
                },
            },
            {
                title: 'Respiration Rate',
                description: 'The respiratory rate is the rate at which breathing occurs. This is usually measured in breaths per minute and is set and controlled by the respiratory centre.',
                key: 'respiration_rate',
                unit: [{
                    system: 'metric',
                    symbol: 'breaths/min',
                }, ],
                norminal_values: {
                    low: 0,
                    normal: 0,
                    high: 0,
                },
            },
            {
                title: 'Weight',
                description: "Human body weight refers to a person's mass or weight. Body weight is measured in kilograms, a measure of mass, throughout the world, although in some countries such as the United States it is measured in pounds, or as in the United Kingdom, stones and pounds.",
                key: 'weight',
                unit: [{
                        system: 'imperial',
                        symbol: 'lbs',
                    },
                    {
                        system: 'metric',
                        symbol: 'kg',
                    },
                ],
                norminal_values: {
                    low: 0,
                    normal: 0,
                    high: 0,
                },
            },
            {
                title: 'Height',
                description: 'Human height or stature is the distance from the bottom of the feet to the top of the head in a human body, standing erect. It is measured using a stadiometer, usually in centimetres when using the metric system, or feet and inches when using the imperial system.',
                key: 'height',
                unit: [{
                        system: 'imperial',
                        symbol: 'ft',
                    },
                    {
                        system: 'metric',
                        symbol: 'cm',
                    },
                ],
                norminal_values: {
                    low: 0,
                    normal: 0,
                    high: 0,
                },
            },
            {
                title: 'Body Mass Index (BMI)',
                description: 'Body mass index is a value derived from the mass and height of a person.',
                key: 'bmi',
                unit: [{
                        system: 'imperial',
                        symbol: 'ib/in2',
                    },
                    {
                        system: 'metric',
                        symbol: 'kg/m2',
                    },
                ],
                norminal_values: {
                    low: 0,
                    normal: 0,
                    high: 0,
                },
            },
            {
                title: 'Body Surface Area',
                description: 'n physiology and medicine, the body surface area is the measured or calculated surface area of a human body.',
                key: 'bsa',
                unit: 'm2',
                unit: [{
                        system: 'imperial',
                        symbol: 'ft2',
                    },
                    {
                        system: 'metric',
                        symbol: 'm2',
                    },
                ],
                norminal_values: {
                    low: 0,
                    normal: 0,
                    high: 0,
                },
            },
        ],
    },
]