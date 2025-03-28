import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const UserHome = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        problemName: "",
        description: "",
        location: "",
        time: "",
        image: null
    });

    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [isCameraOpen, setIsCameraOpen] = useState(false);
    const [capturedImage, setCapturedImage] = useState(null);
    const [isBackCamera, setIsBackCamera] = useState(false); // Toggle for front/back camera
    let streamRef = useRef(null); // Store camera stream

    // Handle form input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle image upload
    const handleImageChange = (e) => {
        setFormData({ ...formData, image: URL.createObjectURL(e.target.files[0]) });
    };

    // Open the camera
    const openCamera = async () => {
        setIsCameraOpen(true);
        const constraints = {
            video: {
                facingMode: isBackCamera ? "environment" : "user" // Switch between front and back camera
            }
        };

        try {
            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            streamRef.current = stream; // Save stream reference
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
        } catch (error) {
            console.error("Error accessing camera:", error);
        }
    };

    // Switch between front and back camera
    const switchCamera = () => {
        setIsBackCamera((prev) => !prev); // Toggle camera
        closeCamera(); // Close current camera
        openCamera(); // Reopen with new camera mode
    };

    // Close camera
    const closeCamera = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
        }
        setIsCameraOpen(false);
    };

    // Capture image from video stream
    const captureImage = () => {
        const canvas = canvasRef.current;
        const video = videoRef.current;
        const context = canvas.getContext("2d");

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        const imageDataURL = canvas.toDataURL("image/png");
        setCapturedImage(imageDataURL);
        setFormData({ ...formData, image: imageDataURL });

        closeCamera(); // Close camera after capturing
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const existingComplaints = JSON.parse(localStorage.getItem('complaints')) || [];
        localStorage.setItem('complaints', JSON.stringify([...existingComplaints, formData]));
        alert("Complaint Submitted Successfully!");
        setFormData({ problemName: "", description: "", location: "", time: "", image: null });
        setCapturedImage(null);
    };

    return (
        <div>
            <Navbar />
            <div className="w-full min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-white flex justify-center items-center">
                <div className="w-96 bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold text-center mb-4">Report a Problem</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col">
                        <label>Full Name:</label>
                        <input type="text" name="problemName" value={formData.problemName} onChange={handleChange}
                            className="mb-3 p-2 bg-gray-700 rounded" required />

                        <label>Problem Description:</label>
                        <textarea name="description" value={formData.description} onChange={handleChange}
                            className="mb-3 p-2 bg-gray-700 rounded h-24" required></textarea>

                        <label>Location:</label>
                        <input type="text" name="location" value={formData.location} onChange={handleChange}
                            className="mb-3 p-2 bg-gray-700 rounded" required />

                        <label>Time:</label>
                        <input type="datetime-local" name="time" value={formData.time} onChange={handleChange}
                            className="mb-3 p-2 bg-gray-700 rounded" required />

                        <div className="mb-3">
                            <label>Upload Image:</label>
                            <input type="file" onChange={handleImageChange} accept="image/*"
                                className="mb-3 p-2 bg-gray-700 rounded " />

                            <p className="text-center my-2">OR</p>

                            {/* Camera Buttons */}
                            <div className="flex gap-2">
                                <button type="button" onClick={openCamera}
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-1/2">
                                    Open Camera
                                </button>
                                <button type="button" onClick={switchCamera}
                                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded w-1/2">
                                    Switch Camera
                                </button>
                            </div>

                            {/* Camera View */}
                            {isCameraOpen && (
                                <div className="mt-3">
                                    <video ref={videoRef} autoPlay className="w-full h-63 bg-gray-800 rounded"></video>
                                    <div className="flex gap-2 mt-2">
                                        <button type="button" onClick={captureImage}
                                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-1/2">
                                            Capture Image
                                        </button>
                                        <button type="button" onClick={closeCamera}
                                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded w-1/2">
                                            Close Camera
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Display Captured Image */}
                            {capturedImage && (
                                <img src={capturedImage} alt="Captured" className="w-full h-full mt-3 rounded" />
                            )}
                        </div>

                        <button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
                            Submit Complaint
                        </button>
                    </form>

                    <button onClick={() => navigate('/complaints')}
                        className="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                        View Complaints
                    </button>
                </div>
            </div>

            {/* Hidden Canvas for Capturing */}
            <canvas ref={canvasRef} className="hidden"></canvas>
        </div>
    );
};

export default UserHome;
