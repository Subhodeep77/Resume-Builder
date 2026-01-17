import { Loader2, Plus, Sparkles, Trash2 } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import api from "../configs/api.js";

const ProjectForm = ({ data, onChange }) => {
  const { token } = useSelector((state) => state.auth);
  const [loadingIndex, setLoadingIndex] = useState(-1);
  const addProject = () => {
    const newProject = {
      name: "",
      type: "",
      description: "",
    };
    onChange([...data, newProject]);
  };
  const removeProject = (index) => {
    const updated = data.filter((_, i) => i !== index);
    onChange(updated);
  };
  const updateProject = (index, field, value) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  const generateProjectDescription = async (index) => {
    setLoadingIndex(index);
    const project = data[index];
    const prompt = `
Enhance this project description for a resume.

Project Name: ${project.name}
Project Type: ${project.type}

Requirements:
- Make it crisp, quantified, and impact-driven
- Highlight technologies, tools, and scale
- Use strong action verbs
- Make it ATS-friendly
- Return only the enhanced description

Original Description:
${project.description}
  `;
    try {
      const { data } = await api.post(
        "/api/ai/enhance-project-desc",
        { userContent: prompt },
        { headers: { Authorization: token } }
      );
      updateProject(index, "description", data.enhancedContent);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoadingIndex(-1);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
            Projects
          </h3>
          <p className="text-sm text-gray-500">Add your projects</p>
        </div>
        <button
          onClick={addProject}
          className="flex items-center gap-2 px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors"
        >
          <Plus className="size-4" />
          Add Project
        </button>
      </div>

      <div className="space-y-4 mt-6">
        {data.map((project, index) => (
          <div
            key={index}
            className="p-4 border border-gray-200 rounded-lg space-y-3"
          >
            <div className="flex justify-between items-start">
              <h4>Project #{index + 1}</h4>
              <button
                onClick={() => removeProject(index)}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                <Trash2 className="size-4" />
              </button>
            </div>

            <div className="grid gap-3">
              <input
                value={project.name || ""}
                onChange={(e) => updateProject(index, "name", e.target.value)}
                type="text"
                placeholder="Project Name"
                className="px-3 py-2 text-sm rounded-lg"
              />

              <input
                value={project.type || ""}
                onChange={(e) => updateProject(index, "type", e.target.value)}
                type="text"
                placeholder="Project Type"
                className="px-3 py-2 text-sm rounded-lg"
              />

              {/* Description + AI Button */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">
                    Project Description
                  </label>
                  <button
                    onClick={() => generateProjectDescription(index)}
                    disabled={
                      loadingIndex === index || !project.name || !project.type
                    }
                    className="flex items-center gap-1 px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors disabled:opacity-50"
                  >
                    {loadingIndex === index ? (
                      <Loader2 className="w-3 h-3 animate-spin" />
                    ) : (
                      <Sparkles className="w-3 h-3" />
                    )}
                    {loadingIndex === index ? "Enhancing..." : "Enhance AI"}
                  </button>
                </div>

                <textarea
                  rows={4}
                  value={project.description || ""}
                  onChange={(e) =>
                    updateProject(index, "description", e.target.value)
                  }
                  className="w-full px-3 py-2 text-sm rounded-lg resize-none"
                  placeholder="Describe your project..."
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectForm;
