/**
 * @apiDefine TokenHasExpiredError
 *
 * @apiError TokenError an Error has occurred
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "errMessage": "Your session has been timed out. Please login again to continue!",
 *       "message": null,
 *       "status": 500,
 *       "data": null,
 *       "response": true
 *     }
 */

/**
 * @apiDescription this endpoint fetches all the medical Specialty for a physician
 * @api {get} /medicalspecialty fetch all medicl specialty
 * @apiName GetMedicalSpecialty Lists
 * @apiGroup Medical_API
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * {
    "status": 200,
    "response": true,
    "data": {
        "list": [
            {
                "description": "An allergist-immunologist diagnoses and manages disorders involving immune system conditions such as asthma, anaphylaxis, rhinitis, and eczema as well as adverse reactions to drugs, foods, and insect stings; also immune deficiency diseases and problems related to autoimmune disease, organ transplantation, or malignancies of the immune system.",
                "children": [],
                "status": "ACTIVE",
                "name": "Allergy and Immunology",
                "title": "allergist / immunologist",
                "key": "allery_and_immunology",
                "__v": 0
            },
            {
                "description": "Family physicians provide front-line health care that is accessible, high quality, comprehensive and continuous over time for people of all ages, life stages, backgrounds and conditions. They care for individuals and for entire families, from birth through the end of life, including a broad range of preventive care; healthy lifestyle counseling; mental health care; care of acute illnesses; management of chronic diseases, including patients with multi-morbidity. When needed, they also provide referral and coordination of care with other specialists.",
                "children": [],
                "status": "ACTIVE",
                "name": "Family Medicine",
                "title": "general practice doctor",
                "key": "family_medicine",
                "__v": 0
            },
            {
                "description": "An otolaryngologist–head and neck surgeon provides medical and/or surgical therapy for the prevention of diseases, allergies, neoplasms, deformities, disorders, and/or injuries of the ears, nose, sinuses, throat, respiratory, and upper alimentary systems, face, jaws, and the other head and neck systems. Head and neck oncology, facial, plastic, and reconstructive surgery and the treatment of disorders of hearing and voice are fundamental areas of expertise.",
                "children": [],
                "status": "ACTIVE",
                "name": "Otolaryngology–Head and Neck Surgery",
                "title": "otolaryngologist-head and neck surgeon (ENT specialist)",
                "key": "otolaryngology",
                "__v": 0
            },
            {
                "description": "A dermatologist is a physician with training and expertise in the diagnosis and medical/surgical management of diseases of the skin, hair and nails, and mucous membranes.",
                "children": [],
                "status": "ACTIVE",
                "name": "Dermatology",
                "title": "Dermatologist",
                "key": "dermatology",
                "__v": 0
            },
            {
                "description": "An obstetrician/gynecologist focuses on the health of women before, during, and after childbearing years, diagnosing and treating conditions of the reproductive system and associated disorders.",
                "children": [],
                "status": "ACTIVE",
                "name": "Obstetrics and Gynecology",
                "title": "obstetrician-gynecologist",
                "key": "obstetrics_and_gynecology",
                "__v": 0
            },
            {
                "description": "Ophthalmology is a specialty focused on the medical and surgical care of the eyes. Ophthalmologists are the only physicians medically trained to manage the complete range of eye and vision care. They can prescribe glasses and contact lenses, dispense medications, diagnose and treat eye conditions and diseases, and perform surgeries.",
                "children": [],
                "status": "ACTIVE",
                "name": "Ophthalmology",
                "title": "ophthalmologist",
                "key": "ophthalmology",
                "__v": 0
            },
            {
                "description": "An internist is a personal physician who provides long-term, comprehensive care in the office and in the hospital, managing both common and complex illnesses of adolescents, adults, and the elderly. Internists are trained in the diagnosis and treatment of cancer, infections, and diseases affecting the heart, blood, kidneys, joints, and the digestive, respiratory, and vascular systems. They are also trained in the essentials of primary care internal medicine, which incorporates an understanding of disease prevention, wellness, substance abuse, mental health, and effective treatment of common problems of the eyes, ears, skin, nervous system, and reproductive organs.",
                "children": [],
                "status": "ACTIVE",
                "name": "Internal Medicine",
                "title": "internist",
                "key": "internal_medicine",
                "__v": 0
            },
            {
                "description": "A pathologist deals with the causes and nature of disease and contributes to diagnosis, prognosis, and treatment through knowledge gained by the laboratory application of the biologic, chemical, and physical sciences. This specialist uses information gathered from the microscopic examination of tissue specimens, cells and body fluids, and from clinical laboratory tests on body fluids and secretions for the diagnosis, exclusion, and monitoring of disease.",
                "children": [],
                "status": "ACTIVE",
                "name": "Pathology",
                "title": "pathologist",
                "key": "pathology",
                "__v": 0
            },
            {
                "description": "Pediatricians practice the specialty of medical science concerned with the physical, emotional, and social health of children from birth to young adulthood. Pediatric care encompasses a broad spectrum of health services ranging from preventive health care to the diagnosis and treatment of acute and chronic diseases. Pediatricians understand the many factors that affect the growth and development of children. They understand that children are not simply small adults. Children change rapidly, and they must be approached with an appreciation for their stage of physical and mental development.",
                "children": [],
                "status": "ACTIVE",
                "name": "Pediatrics",
                "title": "pediatrician",
                "key": "pediatrics",
                "__v": 0
            },
            {
                "description": "A psychiatrist specializes in the evaluation and treatment of mental, addictive, and emotional disorders such as schizophrenia and other psychotic disorders, mood disorders, anxiety disorders, substancerelated disorders, sexual and gender-identity disorders, and adjustment disorders.",
                "children": [],
                "status": "ACTIVE",
                "name": "Psychiatry",
                "title": "psychiatrist",
                "key": "psychiatry",
                "__v": 0
            },
            {
                "description": "A radiologist is a physician who uses imaging methodologies to diagnose and manage patients and provide therapeutic options. Physicians practicing in the field of Radiology specialize in Diagnostic Radiology, Interventional Radiology, or Radiation Oncology. They may certify in a number of subspecialties. The board also certifies in Medical Physics and issues specific certificates within each discipline",
                "children": [],
                "status": "ACTIVE",
                "name": "Radiology",
                "title": "Radiologist",
                "key": "radiology",
                "__v": 0
            },
            {
                "description": "A Surgeon uses operative measures to treat disease, injuries, and disorders or repair tissues or organs. Surgeons are responsible for the diagnosis and preoperative, operative, and postoperative management\n                of patient care. During the course of the operation, the surgeon makes important decisions about the patient’s health, safety, and welfare, working in cooperation with other members of the surgical team. To acknowledge the specialized activities and interests of individuals wanting to become surgeons, the American Board of Surgery offers\n                primary certification in Surgery and Vascular Surgery. A variety of subspecialty certificates are offered.",
                "children": [],
                "status": "ACTIVE",
                "name": "Surgery",
                "title": "Surgeon",
                "key": "surgery",
                "__v": 0
            },
            {
                "description": "A urologist, also known as a genitourinary surgeon, focuses on diagnosing and treating disorders of the urinary tracts of males and females, and on the reproductive system of males. This specialist manages non-surgical problems such as urinary tract infections and benign prostatic hyperplasia, as well as surgical problems such as the surgical management of cancers, the correction of congenital abnormalities, and correcting stress incontinence.",
                "children": [],
                "status": "ACTIVE",
                "name": "Urology",
                "title": "Urologist",
                "key": "Urology",
                "__v": 0
            }
        ]
    },
    "message": "Select a specialty",
    "errMessage": null
}
  * @apiUse TokenHasExpiredError
 */

/**
 * @apiDescription this endpoint fetches and all available medical credentials on the platform
 * @api {get} /medicalcredentials get medical credentials lists
 * @apiName GetMedicalCredentials 
 * @apiGroup Medical_API
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * {
    "status": 200,
    "response": true,
    "data": {
        "medical_credentials": [
            {
                "description": "An MD is commonly referred to as a physician or doctor. A MD has a doctoral degree for physicians awarded by accredited medical schools. A MD works to maintain or restore human health through the study, diagnosis and treatment of disease or injury.",
                "status": "ACTIVE",
                "title": "Doctor of Medicine",
                "subtitle": "MD",
                "key": "MD",
                "__v": 0
            },
            {
                "description": "It is awarded by medical schools and universities in medical and surgery. As the name suggest they are two separate degree however, in practice they are treated as one and awarded together. The time duration of MBBS course is five or six years.",
                "status": "ACTIVE",
                "title": "Bachelor of Medicine and Bachelor of Science",
                "subtitle": "MBBS",
                "key": "MBBS",
                "__v": 0
            },
            {
                "description": "A DO belongs to a separate, but equal, branch of medicine as a MD. A DO takes in account the musculoskeletal system, physical, mental, emotional and spiritual health of a patient, and how each aspect could contribute to illness.",
                "status": "ACTIVE",
                "title": "Doctor of Osteopathic Medicine",
                "subtitle": "DO",
                "key": "DO",
                "__v": 0
            }
        ]
    },
    "message": "Select a specialty",
    "errMessage": null
}
  * @apiUse TokenHasExpiredError
 */