import React from "react";
import Home from "../pages/Home";
import fotinho from "../assets/3aa506729e1424af36a545b1850fb96b-removebg-preview.png";
import { useForm } from "react-hook-form";

const FormularioContato = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const onSubmit = async (data) => {
		try {
			const response = await fetch("https://formspree.io/f/xzzyegeo", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (response.ok) {
				alert("Mensagem enviada com sucesso!");
				reset();
			} else {
				alert("Erro ao enviar mensagem.");
			}
		} catch (error) {
			alert("Erro ao enviar mensagem.");
			console.error(error);
		}
	};

	return (
		<div className="min-h-screen w-full relative overflow-hidden flex justify-center items-start pt-32 px-4 bg-gradient-to-b from-[#0a0014] via-[#1b0035] to-[#090013] text-white">
			{/* ... suas nebulosas */}

			<div className="relative z-10 w-[800px] flex items-center justify-center gap-6">
				<span className="text-white text-[150px] opacity-40 font-bold">
					{"{"}
				</span>

				{/* CARD */}
				<div className="relative w-full max-w-md px-8 py-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl">
					<h1 className="text-center text-2xl font-bold mb-8">
						✨ Entre em Contato ✨
					</h1>

					{/* FORM QUE FUNCIONA */}
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="space-y-4 text-gray-900"
					>
						{/* NOME */}
						<div>
							<input
								type="text"
								placeholder="Seu nome"
								{...register("nome", {
									required: "Digite seu nome.",
									minLength: { value: 10, message: "Mínimo de 10 caracteres." },
								})}
								className={`w-full px-4 py-3 rounded-lg bg-white/70 
                ${
									errors.nome ? "border border-red-500" : "border-transparent"
								}`}
							/>
							{errors.nome && (
								<p className="text-red-300">{errors.nome.message}</p>
							)}
						</div>

						{/* EMAIL */}
						<div>
							<input
								type="email"
								placeholder="Seu e-mail"
								{...register("email", {
									required: "Digite seu e-mail.",
									minLength: { value: 10, message: "Mínimo de 10 caracteres." },
									pattern: {
										value: /\S+@\S+\.\S+/,
										message: "E-mail inválido.",
									},
								})}
								className={`w-full px-4 py-3 rounded-lg bg-white/70 
                ${
									errors.email ? "border border-red-500" : "border-transparent"
								}`}
							/>
							{errors.email && (
								<p className="text-red-300">{errors.email.message}</p>
							)}
						</div>

						{/* MENSAGEM */}
						<div>
							<textarea
								rows="4"
								placeholder="Sua mensagem..."
								{...register("mensagem", {
									required: "Digite sua mensagem.",
									minLength: { value: 10, message: "Mínimo de 10 caracteres." },
								})}
								className={`w-full px-4 py-3 rounded-lg bg-white/70 resize-none 
                ${
									errors.mensagem
										? "border border-red-500"
										: "border-transparent"
								}`}
							></textarea>
							{errors.mensagem && (
								<p className="text-red-300">{errors.mensagem.message}</p>
							)}
						</div>

						<button
							type="submit"
							className="cursor-pointer w-full py-3 mt-2 font-semibold text-white rounded-lg bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 shadow-lg hover:shadow-xl transition"
						>
							Enviar Mensagem
						</button>
					</form>

					{/* emoji */}
					<img
						src={fotinho}
						className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-40"
						alt=""
					/>
				</div>

				<span className="text-white text-[150px] opacity-40 font-bold">
					{"}"}
				</span>
			</div>
		</div>
	);
};

export default FormularioContato;
