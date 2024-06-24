import { MdHome } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useEffect, useState } from "react";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Employment() {
  const [jobCards, setJobCards] = useState([]);
  const [formData, setFormData] = useState({
    mode: "",
    type: "",
    company: "",
    location: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/employment/data_get", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const jsonData = await response.json();
        setJobCards(jsonData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [formData]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="flex flex-col px-6 sm:px-12 bg-gray-100 min-h-screen">
      <h1 className="text-5xl font-bold text-center py-12">Employment</h1>
      <div className="grid sm:grid-cols-[1fr_auto_4fr] gap-8">
        <div className="bg-white rounded-xl flex flex-col gap-6 p-6 shadow-lg">
          <h3 className="font-semibold text-2xl text-center">Filters</h3>
          <div className="flex flex-col gap-4">
            <div>
              <h4 className="font-semibold mb-2">Location</h4>
              <select
                name="location"
                className="px-4 py-2 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.location}
                onChange={handleChange}
              >
                <option value="">Select Location</option>
                <option value="jaipur">Jaipur</option>
                <option value="lucknow">Lucknow</option>
                <option value="alwar">Alwar</option>
                <option value="agra">Agra</option>
                <option value="mathura">Mathura</option>
                <option value="delhi">Delhi</option>
                <option value="jodhpur">Jodhpur</option>
              </select>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Job Type</h4>
              <select
                name="type"
                className="px-4 py-2 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="">Select Job</option>
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
              </select>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Education</h4>
              <select
                name="education"
                className="px-4 py-2 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.education}
                onChange={handleChange}
              >
                <option value="">Select Education</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
              </select>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Work Mode</h4>
              <select
                name="mode"
                className="px-4 py-2 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.mode}
                onChange={handleChange}
              >
                <option value="">Select Work Mode</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </select>
            </div>
          </div>
        </div>

        <div className="hidden sm:block bg-gray-300 w-px" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobCards.map((job, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-4 bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold text-xl">{capitalizeFirstLetter(job.title)}</h1>
                <p className="text-gray-500">{capitalizeFirstLetter(job.company)}</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-gray-500 flex items-center gap-2">
                  <FaLocationDot className="text-blue-500" />
                  {capitalizeFirstLetter(job.location)}
                </p>
                <p className="text-gray-500 flex items-center gap-2">
                  <MdHome className="text-blue-500" />
                  {job.mode}
                </p>
              </div>
              <p className="bg-blue-500 text-white py-1 px-3 rounded-md">
                {job.type}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Employment;
