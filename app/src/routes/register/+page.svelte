<div
	class="flex flex-col justify-center items-center h-screen w-full bg-gradient-to-r from-indigo-500 to-indigo-950"
>
	<div
		class="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10"
	>
		<div class="w-full">
			<div class="text-center">
				<h1 class="text-3xl font-semibold text-gray-900">Crie sua conta</h1>
			</div>
			<div class="mt-5">
				<form method="POST">
					<div class="relative mt-6">
						<input
							type="text"
							name="fullName"
							id="fullName"
							placeholder="Davi Holanda"
							class="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
						/>
						<label
							for="fullName"
							class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
							>Nome Completo</label
						>
					</div>
					<div class="relative mt-6">
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Email"
							class="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
						/>
						<label
							for="email"
							class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
							>Email</label
						>
					</div>
					<div class="relative mt-6">
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Password"
							class="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
						/>
						<label
							for="password"
							class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
							>Senha</label
						>
					</div>
					<div class="my-6">
						<button
							type="submit"
							class="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
							>Enviar</button
						>
					</div>
					<p class="text-center text-sm text-gray-500">
                        Já possui uma conta?
						<a
							href="/login"
							class="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
							>Login
						</a>.
					</p>
				</form>
			</div>
		</div>
	</div>
</div>